//Colocar dentro da pasta utils..
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_EXPENSIVE);
        console.log("Connect to MongoDB successfully");
    } catch (error) {
        console.log("Connect failed " + error.message);
    }
};

export default connectDB;