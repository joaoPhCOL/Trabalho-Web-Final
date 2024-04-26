const mongoose = require('mongoose');

export default async function connectarBanco(){

    try{
        // String de conexão fornecida pelo MongoDB Atlas
        const uri = 'joaocolturato:559847@admeventos.hwamnxp.mongodb.net/?retryWrites=true&w=majority&appName=AdmEventos'

        // Configurações adicionais, se necessário
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        
        await mongoose.connect(uri, options);
        console.log('Conexão bem-sucedida');
    
    } catch (error) {
        console.error('Erro ao conectar com o banco:', error);
  }  
}
    