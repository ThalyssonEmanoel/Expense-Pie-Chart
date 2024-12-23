import GastosService from '../service/gastosService.js';
import { GastoSchema } from '../schemas/gastosSchema.js';
import { commonResponse } from '../utils/commonResponse.js';

class GastosController {
  constructor() {
    this.service = new GastosService();
  }

  async listar(req, res) {
    try {
      
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async listarPorId(req, res) {
    try {
      
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async criar(req, res) {
    try {

      return res.status(response.statusCode).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async deletar(req, res) {
    try {

      return res.status(response.statusCode).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default GastosController;
