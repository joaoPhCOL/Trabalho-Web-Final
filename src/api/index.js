import connectarBanco from "./server/dbConnect";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body; // Dados do formulário enviados na requisição POST
            const db = await connectarBanco; // Conecta ao banco de dados
            const collection = db.collection('eventos'); // Coleção onde os dados serão inseridos

            // Insere os dados no banco de dados
            await collection.insertOne(data);

            res.status(201).json({ success: true, message: 'Dados do formulario gravados com sucesso' });
        } catch (error) {
            console.error('Erro ao gravar dados no banco de dados:', error);
            res.status(500).json({ success: false, error: 'Erro ao gravar dados no banco de dados' });
        }
    } else {
        // Se o metodo nao for POST, retorna um status de erro
        res.status(405).json({ success: false, error: 'Metodo não permitido' });
    }
}
