const crypto = require('crypto');
class Cryption {
    constructor(appKey) {
        this.SETTINGS = {
            key: Buffer.from(appKey.substring(7), 'base64'),
            sha: 'sha256',
            mode: 'AES-256-CBC'
        };
    }
    /**
     * Calculate MAC.
     * Payload needs to be decoded to JSON with getJsonPayload(payload)
     * @param {Object} payload with iv & value 
     * @param {String} key 
     */
    calculateMac(payload, key) {
        let hashedData = this.hash(payload['iv'], payload['value'])
        return this.hashHmac(hashedData, key);
    }

    /**
     * Decrypts payload with master key
     * @param {String} Payload - base64 encoded json with iv, value, mac information
     */
    decrypt(payload) {
        let _payload = this.getJsonPayload(payload);
        let _iv = Buffer.from(_payload['iv'], 'base64');
        let decipher = crypto.createDecipheriv(this.SETTINGS.mode, this.SETTINGS.key, _iv);
        let decrypted = decipher.update(_payload['value'], 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        // return this.hashDeserialize(decrypted);
        return decrypted;
    }

    /**
     * Create payload encrypted with master key.
     * Payload contains: iv, value, mac
     * @param {String} data to be encrypted
     * @return {String} Base64 encdoded payload 
     */
    encrypt(data) {
        let serializedValue = this.hashSerialize(data);

        try {
            let _iv = crypto.randomBytes(16);
            let base64_iv = _iv.toString('base64');
            let cipher = crypto.createCipheriv(this.SETTINGS.mode, this.SETTINGS.key, _iv);
            let encrypted = cipher.update(serializedValue, 'utf8', 'base64');
            encrypted += cipher.final('base64');
            let _mac = this.hash(base64_iv, encrypted);
            let payloadObject = {
                'iv': base64_iv,
                'value': encrypted,
                'mac': _mac
            }
            let _payload = JSON.stringify(payloadObject);
            let base64_payload = Buffer.from(_payload).toString('base64');
            return base64_payload;
        }
        catch (e) {
            console.log(e)
            throw new Error('Cannot encrypt data provided !');
        }
    }

    /**
     * Get JSON object from payload.
     * Payload needs to be base64 encoded and must contains iv, value, mac attributes.
     * MAC is validated
     * @param {String} payload
     * @return {Object} Data with iv, value, mac
     */
    getJsonPayload(payload) {
        if (payload === undefined || payload === '') {
            throw new Error('Payload MUST NOT be empty !');
        }
        if (typeof payload !== 'string') {
            throw new Error('Payload MUST be string !');
        }
        try {
            var _payload = JSON.parse(Buffer.from(payload, 'base64'));
        }
        catch (e) {
            throw new Error('Payload cannot be parsed !');
        }
        if (!this.isValidPayload(_payload)) {
            throw new Error('Payload is not valid !');
        }
        if (!this.isValidMac(_payload)) {
            throw new Error('Mac is not valid !');
        }
        return _payload;
    }

    /**
     * Hash function.
     * Combines initialization vector (iv) with data to be hashed (value).
     * Uses master key to hash results
     * @param {String} iv Initialization vector
     * @param {String} value Data
     */
    hash(iv, value) {
        if (iv === undefined || iv === '') {
            throw new Error('Iv is not defined !');
        }
        if (value === undefined || value === '') {
            throw new Error('Value is not defined !');
        }
        let data = String(iv) + String(value);
        return this.hashHmac(data, this.SETTINGS.key);
    }

    /**
     * Crypto function to hash data with given key
     * @param {String} data 
     * @param {String} key 
     */
    hashHmac(data, key) {
        let hmac = crypto.createHmac(this.SETTINGS.sha, key);
        hmac.update(data);
        return hmac.digest('hex');
    }

    /**
     * MAC validation function.
     * Payload must be decoded to JSON
     * @param {Object} payload 
     */
    isValidMac(payload) {
        let bytes = crypto.randomBytes(16),
            calculatedMac = this.calculateMac(payload, bytes);

        let originalMac = this.hashHmac(payload['mac'], bytes);
        return originalMac === calculatedMac;
    }

    /**
     * Payload validation function.
     * Payload must be decoded to JSON
     * @param {Object} payload 
     */
    isValidPayload(payload) {
        return (payload.hasOwnProperty('iv') && payload.hasOwnProperty('value') && payload.hasOwnProperty('mac'));
    }

    hashDeserialize(data) {
        let str = String(data);
        return str.substring(str.lastIndexOf(':') + 1, str.lastIndexOf(';')).replace(/"/g, '');
    }

    hashSerialize(data) {
        if (typeof data !== 'string') {
            throw new Error('Data to be serialized must be type of string !');
        }
        let str = String(data);
        return str;
        // return 's:' + str.length + ':"' + str + ';"';
    }
}





module.exports = Cryption;



/**
 * Usecase
 */

// var credentials = {
//     email: 'admin@mail.com',
//     timestamp: new Date()
// };


// console.log(credentials.timestamp);

// const cryption  = new Cryption('base64:jPMAS5iDh5vHWceGzWxS16CkiFH8ssZ7OV4S0kOIw+M=')
// let encryptedToken  =  cryption.encrypt(JSON.stringify(credentials));

// console.log(cryption.decrypt(encryptedToken));

// const redirectUrl = `http://3.80.128.24/auth/redirect?token=${encryptedToken}`


// console.log(redirectUrl);