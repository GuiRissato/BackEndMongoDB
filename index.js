const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');






// criando um bloco assincrono e ja executando esse bloco
(async () => {


//  se for uma aplcacao real e um banco que voce quer proteger a senha, nao coloque essas informacoes no GitHub
// procure sempre utilizar as variaveis de ambiente para isso
const connectionString = 'mongodb+srv://admin:yt132tzRNjeyHaA2@cluster0.gvmnm.mongodb.net/Ocean_mogo_DB?retryWrites=true&w=majority';

// async/await
console.info('Conectando o banco de dados MongoDB')
// variavel que vai fazer a conexao com o banco de dados
const client = await mongodb.MongoClient.connect(connectionString,{
    useUnifiedTopology: true

});
console.info('Banco de dados conectado com sucesso')

const app = express();
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/', (req, res) => {
    res.send('Hello world com MongoDB!');
});

// Endpoints de envio de mensagens
// CRUD -> Create, Read (Read All e Read Single), Update and Delete
// CRUD -> Criar, Ler (Ler tudo e ler individualmente), atualizar e remover

const mensagens = [];

// Read All
app.get('/mensagens', (req, res) => {
    res.json(mensagens.filter(Boolean));
});

// Create
app.post('/mensagens', (req, res) => {
});

// Read Single
app.get('/mensagens/:id', (req, res) => {
});

// Update
app.put('/mensagens/:id', (req, res) => {
});

// Delete
app.delete('/mensagens/:id', (req, res) => {
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
// fecho o bloco assincrono e executo
})();
