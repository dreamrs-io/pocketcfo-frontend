
import { Schema, model, models } from 'mongoose';

const instanceSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    instance_aws_id:{
        type:String,
        required:true
    },
    subscription_id: {
        type: Schema.Types.ObjectId,
        ref: 'subscription',
        required: true
    },
    domain_name: {
        type: String,
        default: 'pocketcfo.com'
    },
    status:{
        type:Number,
        required:true,
        default:1
    },
    software_credentials: {
        email: {
            type: String
        },
        password: {
            type: String
        }
    }
});

const Instance = models.instance || model('instance', instanceSchema);

export default Instance;