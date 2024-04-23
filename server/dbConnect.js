import { MongoClient } from 'mongodb';

export default async function connectToDatabase(){
    const uri = 'mongodb+srv://joaocolturato:559847@admeventos.hwamnxp.mongodb.net/?retryWrites=true&w=majority&appName=AdmEventos';

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
          console.log("Conexão estabelecida");
        return client.db("AdmEventos");
    }catch (error){
        console.error("Erro ao conectar", error);
        throw error;
    }
}