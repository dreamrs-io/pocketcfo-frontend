
import { Schema, model, models } from 'mongoose';

const instanceSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    name: {
        type: String,
        default: 'Instance Name'
    },
    instance_aws_id: {
        type: String,
        default: null
    },
    stripe_subscription_id: {
        type: String,
        required: true,
    },
    domain_name: {
        type: String,
        default: process.env.DEMO_APP_DOMAIN
    },
    subscription_status: {
        type: String,
        required: true
    },
    stripe_plan_id :{
        type: String,
        required: true
    }
}, { timestamps: true });

const Instance = models.instance || model('instance', instanceSchema);

export default Instance;