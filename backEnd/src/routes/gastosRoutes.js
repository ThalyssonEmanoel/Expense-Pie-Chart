import express from "express";
import GastosController from '../controller/gastosController.js';

const router = express.Router();

const gastosController = new GastosController(); 

router
  .get("/gastos", gastosController.listar.bind(gastosController))
  // .post("/gastos", gastosController.criar)
  // .delete("/api/gastos/:id", gastosController.deletar)

export default router;