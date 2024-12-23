import GastosRepository from '../repositories/gastosRepository.js';
// import { GastoSchema } from '../schemas/gastosSchema.js';

class GastosService {
  constructor() {
    this.repository = new GastosRepository();
  }
  async listar(req) {
      
  const data = await this.repository.listar(req);

  if (!data) {
    throw new Error('Nenhuma despesa encontrada');
  }

  return data;
  }

  async create(data) {
    const resultado = await this.repository.create(data);
    return resultado;
  }

  async deletar(id) {
    const data = await this.repository.deletar(id);
    return data;
  }
}

export default GastosService;
