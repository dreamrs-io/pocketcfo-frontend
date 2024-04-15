

export const config = {
    maxDuration: 300,
};
   

export default async function handler(req, res) {



    const r = {message:'RUNTIME'}


    res.status(200).json(r);
}