import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false); 

class Usuários {
  constructor() {

const usuarioSchema = new mongoose.Schema({
  nome: 
  {
    type: String, required: true
  },
  senha: 
  {
    type: String, required: true
  }
  }, 
  {
  versionKey: false // Exclude the __v field
  }
); 

usuarioSchema.plugin(mongoosePaginate);

  this.model = mongoose.model('Usuários', usuarioSchema);
  }
}
export default new Usuários().model;