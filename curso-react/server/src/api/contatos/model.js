//criando o schema
const restful = require('node-restful');
const mongoose = restful.mongoose; //referencia ao mongoose do restful
//definindo o schema contato
const contatoSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    nome: { type: String, required: true },
    email: {type: String, required: true},
    telefone: {type: Number},
    assunto: { type: String }
});
module.exports = restful.model('contato', contatoSchema);