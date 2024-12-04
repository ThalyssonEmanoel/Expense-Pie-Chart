//Colocar dentro da pasta utils..
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_EXPENSIVE);
        console.log("Conexão com o banco feita com sucesso");
    } catch (error) {
        console.log("Conexão com o banco falhou " + error.message);
    }
};

export default connectDB;