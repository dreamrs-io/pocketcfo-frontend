
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
    status: {
        type: Number,
        required: true,
        default: () => process.env.APP_ENV === 'local' ? 2 : 1 
    },
    subscription_status: {
        type: String,
        required: true
    },
    laravel_key: {
        type: String,
        default: null
    },
}, { timestamps: true });

const Instance = models.instance || model('instance', instanceSchema);

export default Instance;