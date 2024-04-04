import connectMongo from "@/database/conn";
import Instance from "@/models/Instances";
import { getServerAuthSession } from "../auth/[...nextauth]";
import { ErrorCodes } from "@/utils/Errors";


export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    connectMongo();


    switch (req.method) {
    case 'GET':
        const instances = await Instance.find({ user_id: session.user.id });
        res.status(200).json({ instances })
        break;
    case 'POST':
        const { name, id } = req.body;
        try {
            const instance = await Instance.findOne({ _id: id });
            instance.name = name;
            await instance.save();
            res.status(202).json({message:'Updated'})
        } catch (error) {
            res.status(500).json({ message: 'Server Error Occured' })
        }
        break;
    default:
        res.status(405).json({ message: 'Method Not Allowed' })

    }

}



