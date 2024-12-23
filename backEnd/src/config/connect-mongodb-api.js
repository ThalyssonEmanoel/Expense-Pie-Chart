import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

class connectDB {
    static async conectar() {
        try {
            const mongoUri = process.env.MONGODB_URL_EXPENSIVE;
            console.log(`MONGO_URI utilizado: ${mongoUri}`); // Verificação

            if (!mongoUri) {
                throw new Error("A variável de ambiente MONGO_URI não está definida.");
            }

            mongoose.set("strictQuery", false);

            // Configuração condicional para autoIndex e debug
            if (process.env.NODE_ENV === 'development') {
                mongoose.set('autoIndex', true); // Cria índices automaticamente
                mongoose.set('debug', true); // Ativa logs de debug
            } else {
                mongoose.set('autoIndex', false); // Desativa criação automática de índices
                mongoose.set('debug', false); // Desativa logs de debug
            }

            await mongoose.connect(mongoUri);
            console.log('Conexão com o banco estabelecida!');
        } catch (error) {
            console.error(`Erro na conexão com o banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }

    static async desconectar() {
        try {
            await mongoose.disconnect();
            console.log('Conexão com o banco encerrada!');
        } catch (error) {
            console.error(`Erro ao desconectar do banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }
}

export default connectDB;