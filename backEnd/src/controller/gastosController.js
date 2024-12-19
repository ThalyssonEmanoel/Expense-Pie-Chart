import GastosService from '../service/gastosService.js';
// import { GastoSchema } from '../schemas/gastosSchema.js';

class GastosController {
    constructor() {
        this.service = new GastosService();
    }

    async listar(req, res) {
        try {
            console.log('Estou no listar em UsuarioController, enviando req para UsuarioService');

            const data = await this.service.listar(req); 

            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    /**
     * Criar um novo dado.
     */
    // async criar(req, res) {
    //     console.log('Estou no criar em UsuarioController');

    //     const parsedData = UsuarioSchema.parse(req.body);

    //     const data = await this.service.criar(parsedData);

    //     return CommonResponse.created(res, data);
    // }

    // async deletar(req, res) {
    //     console.log('Estou no deletar em UsuarioController');
    
    //     const { id } = req.params || null;
    //     if (!id) {
    //         throw new CustomError('ID do usuário é obrigatório para deletar.', HttpStatusCodes.BAD_REQUEST);
    //     }

    //     const data = await this.service.deletar(id);

    //     return CommonResponse.success(res, data, 200, 'Usuário excluído com sucesso.');
    // }   
}

export default GastosController;
