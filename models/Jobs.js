// import connectMongo from '@/database/conn';
import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data:{
        type:Schema.Types.Mixed,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed'],
        default:'pending'
    },

    
}, { timestamps: true })


JobSchema.post('find', async function (docs, next) {
    try {
        const ids = docs.map(doc => doc._id);
        await Job.updateMany(
            { _id: { $in: ids } },
            { $set: { status: 'processing' } } 
        );

        next();
    } catch (error) {
        next(error);
    }
});

const Job = models.job || model('job', JobSchema);

export default Job;