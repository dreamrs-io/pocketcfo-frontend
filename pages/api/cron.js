import connectMongo from "@/database/conn";
import { sendEmail } from "@/lib/mailer";
import Job from "@/models/Jobs";


export const config = {
    maxDuration: 200,
};

export default async function handler(req, res) {

    await connectMongo();

    let jobs = await Job.find({ status: 'pending' }).limit(35);



    let successCount = 0;
    let failCount = 0;
    const totalJobs = jobs.length;


    if (jobs.length == 0) {
        res.status(200).json({ message: 'No Jobs to run' })
    }

    for (const job of jobs) {
        const emailSent = await sendEmail(job.data.to, job.data.from, job.data.subject, job.data.html);
        if (emailSent) {
            await Job.updateOne({ _id: job._id }, { $set: { status: 'completed' } });
            successCount++;
            
        } else {
            await Job.updateOne({ _id: job._id }, { $set: { status: 'failed' } });
            failCount++;
           
        }
    }

    const responseMessage = `Successfully executed ${successCount} out of ${totalJobs} jobs. Failed to execute ${failCount} jobs.`;
    const responseData = {
        message: responseMessage,
    };


    res.status(200).json(responseData);
}