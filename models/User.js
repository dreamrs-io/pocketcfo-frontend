// import connectMongo from '@/database/conn';
import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type:String
    },
    stripe_customer_id:{
        type:String,
        default:null
    },
    provider: {
        type: String,
        enum: ['google','credentials' ],
        required:true,
    },
    password:{
        type:String,
        default:null
    },
    verified :{
        type:Boolean,
        default:false
    }
}, { timestamps: true })


userSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified or is new
    if (!this.isModified('password')) {
        return next();
    }

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Replace plain text password with hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


const User = models.user || model('user', userSchema);

export default User;