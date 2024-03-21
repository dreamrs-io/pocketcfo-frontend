import Instance from "@/models/Instances";


export default async function handler(req, res) {

    // authentication 


    
    const instances = await Instance.find();

    console.log(instances)


    res.status(200).json({instances})


}