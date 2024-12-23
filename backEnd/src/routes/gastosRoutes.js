import express from "express";
import GastosController from '../controller/gastosController.js';

const router = express.Router();

const gastosController = new GastosController(); 

router
  .get("/gastos", gastosController.listar.bind(gastosController))
  .post("/gastos", gastosController.criar.bind(gastosController))
  .delete("/api/gastos/:id", gastosController.deletar.bind(gastosController));

export default router;