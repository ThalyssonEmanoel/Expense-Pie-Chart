import mongoose from 'mongoose';
mongoose.set('strictQuery', false); 

const { Schema } = mongoose;

const despesaSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  valorDespesa: {
    type: Number,
    required: true
  }
});

const despesa = mongoose.model('despesas', despesaSchema);

export default despesa;