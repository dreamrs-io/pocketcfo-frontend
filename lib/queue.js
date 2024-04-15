import connectMongo from "@/database/conn";
import Job from "@/models/Jobs";
import axios from "axios";
await connectMongo();


async function addEmailToQueue(data) {
    try {
        await Job.create({
            name: 'Email',
            data: data,
        })
        axios.get(process.env.NEXTAUTH_URL+'/api/cron');
        return true;
       
    } catch (error) {
        console.log(error)
        return false
    }

}


    


export { addEmailToQueue};




// import { Queue, Worker } from 'bullmq';
// import Redis from 'ioredis';
// const connection = new Redis('redis://default:a0JXVCJehXf5FHhXSnclLpCmOb2pJLqm@redis-13098.c265.us-east-1-2.ec2.cloud.redislabs.com:13098', {
//     maxRetriesPerRequest: null
// });

// const workerOptions = {
//     connection: connection,
//     concurrency: 5,
//     maxRetriesPerRequest: null,
// }

// const queue = new Queue('PocketCfosJobs', {
//     connection: connection,
//     maxRetriesPerRequest: null,
//     defaultJobOptions:{
//         attempts: 3,
//         backoff: {
//             type: 'exponential',
//             delay: 1000,
//         },
//         removeOnComplete: true,
//     }
// });

// async function addEmailToQueue(data) {

//     try {

//         await queue.add('Email', data);

//         return { success: true, message: 'Email job added to the queue successfully' };
//     } catch (error) {

//         return { success: false, message: 'Error adding email job to the queue: ' + error.message };
//     }
// }


// async function listRemainingJobs() {
//     try {

//         const jobs = await queue.getJobs(['waiting', 'delayed', 'active', 'completed', 'failed', 'paused']);

//         return jobs;
//     } catch (error) {
//         console.error('Error listing remaining jobs:', error);
//         return [];
//     }
// }

// async function processJob(job) {
//     try {
//         console.log('Processing job:', job.id);
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         throw new Error('Job failed intentionally');
//     } catch (error) {
//         console.error('Error processing job:', job.id, error);
//         throw error;
//     }
// }

// async function processJobs() {
//     new Worker('PocketCfosJobs',processJob,workerOptions);
// }







// export { addEmailToQueue, listRemainingJobs, processJobs };