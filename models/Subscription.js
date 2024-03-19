
import { Schema, model, models } from 'mongoose';

const subscriptionSchema = Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user' 
    },
    stripe_subscription_id:{
        type: String,
        required:true
    },
    subscription_status:{
        type:String,
        required:true
    },
    payment_status:{
        type:String,
        required:true,
    }
    
});

const Subscription = models.subscription || model('subscription', subscriptionSchema);

export default Subscription;