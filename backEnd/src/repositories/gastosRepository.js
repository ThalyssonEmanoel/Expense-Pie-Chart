import mongoose from 'mongoose';
import GastosModel from '../models/gastos.model.js';

class GastosRepository {
    constructor({
        gastosModel = GastosModel,
    } = {}) {
        this.model = gastosModel;
    }
    async listar(data) {
        console.log('Estou no listar no GastosRepository');
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
}

export default GastosRepository;