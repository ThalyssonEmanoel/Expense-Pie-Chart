import express from "express";
import UsuarioController from '../controller/usuarioController.js';

const router = express.Router();

const usuarioController = new UsuarioController(); 

router
  .get("/gastos", usuarioController.listar.bind(usuarioController))
  .get("/gastos/:id", usuarioController.listarPorId.bind(usuarioController))
  // .post("/gastos", usuarioController.criar.bind(usuarioController))
  // .delete("/api/gastos/:id", usuarioController.deletar.bind(usuarioController));

export default router;