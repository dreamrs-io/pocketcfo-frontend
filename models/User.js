// import connectMongo from '@/database/conn';
import { Schema, model, models } from 'mongoose';

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
    }
}, { timestamps: true })


const User = models.user || model('user', userSchema);

export default User;