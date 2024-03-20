// import connectMongo from '@/database/conn';
import { Schema, model, models } from 'mongoose';

const InvoiceSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user' 
    },
    subscription_id:{
        type: Schema.Types.ObjectId,
        ref: 'subscription'
    },
    invoice_stripe_id:{
        type: string,
        required:true,
    },
    status:{
        type: string,
        required:true,
    },
    url:{
        type: string,
        required:true,
    },
    payment_status:{
        type: string,
        required:true,
    }
    
}, { timestamps: true })


const Invoice = models.invoice || model('invoice', InvoiceSchema);

export default Invoice;