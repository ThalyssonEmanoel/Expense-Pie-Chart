import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false); 

class Gastos {
  constructor() {

const despesaSchema = new mongoose.Schema({
  nome: 
  {
    type: String, required: true
  },
  valorDespesa: 
  {
    type: Number, required: true
  }
  }, 
  {
  versionKey: false // Exclude the __v field
  }
); 

despesaSchema.plugin(mongoosePaginate);

  this.model = mongoose.model('despesas', despesaSchema);
  }
}
export default new Gastos().model;