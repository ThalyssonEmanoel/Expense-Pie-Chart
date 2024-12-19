import express from "express";
import GastosController from '../controller/gastosController.js';

const router = express.Router();

const gastosController = new GastosController(); // Instância da classe

router
  .get("/gastos", gastosController.listen)
  .post("/gastos", gastosController.create)
  .delete("/api/gastos/:id", gastosController.delete)

export default router;