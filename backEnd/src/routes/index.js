// src/routes/index.js

import express from "express";
// import swaggerJsDoc from "swagger-jsdoc";
// import swaggerUI from "swagger-ui-express";
// import getSwaggerOptions from "../docs/config/head.js";
// import logRoutes from "../middlewares/LogRoutesMiddleware.js";

import gastos from './gastosRoutes.js';

import dotenv from "dotenv";

dotenv.config();

const routes = (app) => {
    app.use(express.json(),
      gastos,
    );

    app.use((req, res) => {
        res.status(404).json({ message: "Rota não encontrada" });
    });

    
};

export default routes;
