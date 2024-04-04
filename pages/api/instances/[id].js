import connectMongo from "@/database/conn";
import Instance from "@/models/Instances";
import { getServerAuthSession } from "../auth/[...nextauth]";
import { ErrorCodes } from "@/utils/Errors";


export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    connectMongo();


    switch (req.method) {
    case 'POST':
        const { id } = req.query; 
        console.log(id)
        const { email, password } = req.body;
        const validationError = validateCredentials(email, password);
        if (validationError) {
            return res.status(400).json(validationError);
        }
        try {
            const instance = await Instance.findOne({ _id: id });
            if (instance.software_credentials.email != null || instance.software_credentials.password != null ){
                return res.status(400).json(ErrorCodes.CREDENTIALS_UPDATES_NOT_ALLOWED);
            }
            instance.software_credentials.email = email;
            instance.software_credentials.password = password;
            instance.status = 1 ;
            await instance.save();
            res.status(202).json({message:'Updated'})
        } catch (error) {
            res.status(500).json({ message: 'Server Error Occured' })
        }

        break;

    default:
        res.status(405).json({ message: 'Method Not Allowed' })

    }

}



const validateCredentials = (email, password) => {
    // Regular expression to validate email format
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    // Password validation: at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        return ErrorCodes.INVALID_EMAIL_ADDRESS;
    }

    if (!passwordRegex.test(password)) {
        return ErrorCodes.INVALID_PASSWORD;
    }

    return null; // Validation passed
};