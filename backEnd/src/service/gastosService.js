import GastosRepository from '../repositories/gastosRepository.js';
// import { GastoSchema } from '../schemas/gastosSchema.js';

class GastosService {
    constructor() {
        this.repository = new GastosRepository();
    }
    async listar(req) {
      console.log('Estou no listar em GastosService');
      
      const data = await this.repository.listar(req);

      return data;
    }
}

export default GastosService;
