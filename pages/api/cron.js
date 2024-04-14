import { sendEmail } from "@/lib/mailer";
import { addEmailToQueue, listRemainingJobs, processJobs } from "@/lib/queue";
import Job from "@/models/Jobs";
import { confirmationEmailTemplate } from "@/utils/emailTemplates/VerifyEmail";



export default async function handler(req, res) {

    let jobs = await Job.find({status:'pending'}).limit(20);

    if(jobs.length==0){
        res.status(200).json({message:'No Jobs to run'})
    }

    for (const job of jobs) {
        console.log('ITERATION')
        const emailSent = await sendEmail(job.data.to,job.data.from,job.data.subject,job.data.html);
        if (emailSent) {
            await Job.updateOne({ _id: job._id }, { $set: { status: 'completed' } });
        } else {
            await Job.updateOne({ _id: job._id }, { $set: { status: 'failed' } });
        }
    }
    


    res.status(200);
}