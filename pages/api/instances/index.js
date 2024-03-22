import connectMongo from "@/database/conn";
import Instance from "@/models/Instances";
import { getServerAuthSession } from "../auth/[...nextauth]";


export default async function handler(req, res) {

    const session = await getServerAuthSession(req,res)
    if (!session){
        res.status(401).json({message:'Unauthorized'});
    }
    console.log(session);
    // authentication 
    connectMongo();

    
    const instances = await Instance.find();

    console.log(instances)


    res.status(200).json({instances})


}