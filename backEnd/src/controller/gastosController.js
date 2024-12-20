import GastosService from '../service/gastosService.js';
import { GastoSchema } from '../schemas/gastosSchema.js';
import { commonResponse } from '../utils/commonResponse.js';

class GastosController {
  constructor() {
    this.service = new GastosService();
  }

  async listar(req, res) {
    try {
      const data = await this.service.listar(req);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async criar(req, res) {
    try {
      console.log('Estou no criar em UsuarioController');

      const parametros = {
        nome: req.body.nome,
        valorDespesa: parseInt(req.body.valorDespesa),
      };

      const parsedData = GastoSchema.parse(parametros);

      const data = await this.service.create(parsedData);
      console.log('Id criado:', data.id);
      const response = commonResponse.itemCreated(data);
      return res.status(response.statusCode).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async deletar(req, res) {
    try {
      console.log('Estou no deletar em UsuarioController');

      const parametro = req.params.id;

      console.log('parametro:', parametro);

      if (!parametro) {
        throw new Error('ID do usuário é obrigatório para deletar.');
      }

      const data = await this.service.deletar(parametro);

      const response = commonResponse.itemDeleted(data);
      return res.status(response.statusCode).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default GastosController;
