const { model, Schema } = require('mongoose')


const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },    
    cpfCliente: {
        type: String,
        unique: true,
        index: true,
        validate: {
            validator: function(v) {
                return /^\d{11}$/.test(v);
            },
            message: props => `${props.value} não é um CPF válido!`
        }
    
    },
    emailCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    cepCliente: {
        type: String        
    },
    logradouroCliente: {
        type: String  
    },
    numeroCliente: {
        type: String  
    },
    complementoCliente: {
        type: String  
    },
    bairroCliente: {
        type: String 
    },
    cidadeCliente: {
        type: String 
    },
    ufCliente: {
        type: String 
    },
}, {versionKey: false}) 

module.exports = model('Clientes', clienteSchema)