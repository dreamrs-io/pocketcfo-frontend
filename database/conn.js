import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error); 
        return Promise.reject(error)
    }
}

export default connectMongo;