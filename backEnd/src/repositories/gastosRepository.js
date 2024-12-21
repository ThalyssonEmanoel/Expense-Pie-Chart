import mongoose from 'mongoose';
import GastosModel from '../models/gastos.model.js';

class GastosRepository {
  constructor({
    gastosModel = GastosModel,
  } = {}) {
    this.model = gastosModel;
  }
  async listar(data) {
    const id = data.params.id || null;

    if (id) {
      const data = await this.model.findById(id)
      if (!data) { throw new Error('Nenhuma despesas encontrada'); }

      return data;
    }

    const { page = 1, limite = 10 } = data.query; // Provide default values for page and limit
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limite, 10),
      sort: { nome: 1 },
    };

    const resultado = await this.model.paginate({}, options);

    return resultado;
  }
  async create(data) {
    const existingExpense = await this.model.findOne({ nome: data.nome });
    if (existingExpense) {
      existingExpense.valorDespesa += data.valorDespesa;
      const updatedExpense = await existingExpense.save();
      return updatedExpense;
    } else {
      const resultado = await this.model.create(data);
      return resultado;
    }
  }

  async deletar(id) {
    const data = await this.model.findByIdAndDelete(id);
    if (!data) {
      throw new Error('Despesa não encontrada');
    }
    return data;
  }

}
//shift + alt + f
export default GastosRepository;