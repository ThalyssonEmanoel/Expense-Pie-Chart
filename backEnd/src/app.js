import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
// import helmet from "helmet";
import compression from "compression";
import DbConect from './config/connect-mongodb-api.js';

const app = express();
app.use(cors()); 
app.use(express.json());

DbConect.conectar();

// app.use(helmet());

// Habilitando a compressão de respostas
app.use(compression());

// Habilitando o uso de json pelo express
app.use(express.json());

// Habilitando o uso de urlencoded pelo express
app.use(express.urlencoded({ extended: true }));

// Passando para o arquivo de rotas o app
routes(app);

// exportando para o server.js fazer uso
export default app;