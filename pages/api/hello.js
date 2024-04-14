import { addEmailToQueue, listRemainingJobs, processJobs } from "@/lib/queue";
import Job from "@/models/Jobs";
import { confirmationEmailTemplate } from "@/utils/emailTemplates/VerifyEmail";



export default async function handler(req, res) {


    // let jobs = await Job.find({status:'pending'});

    // console.log(jobs)

    // jobs = await Job.find({status:'pending'});


    // console.log(jobs)




    // Job.updateMany()

    // const emailTemplate = confirmationEmailTemplate('alpha', 'mohid')
    // const data = {
    //     from: 'pcfo',
    //     to:'mohid',
    //     subject:'alpha',
    //     html:emailTemplate
    // }

    // await addEmailToQueue(data);


    res.status(200).json(jobs);
}