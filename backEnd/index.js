import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connect-mongodb-api.js';
import Despesa from './models/gastos.model.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/api/gastos", async (req, res) => {
  try {
    const despesas = await Despesa.find({}, '_id nome valorDespesa');
    res.status(200).json(despesas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.post("/api/gastos", async (req, res) => {
  try {
    const { nome, valorDespesa } = req.body;
    const novaDespesa = new Despesa({ nome, valorDespesa });
    await novaDespesa.save();
    res.status(201).json(novaDespesa);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.delete("/api/gastos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const despesaDeletada = await Despesa.findByIdAndDelete(id);
    if (!despesaDeletada) {
      return res.status(404).json({ msg: "Despesa não encontrada" });
    }
    res.status(200).json({ msg: "Despesa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`FUNCIONOU, ESTÁ RODANDO NA PORTA: localhost:${PORT}`);
});

export default app;