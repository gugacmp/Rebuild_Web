npm init -y
npm install express mongoose

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('sua-uri-de-conexao-do-mongodb', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const dadosSchema = new Schema({
    campo1: String,
    campo2: Number
});

const Dados = mongoose.model('Dados', dadosSchema);

app.use(express.json());

app.post('/salvarDados', async (req, res) => {
    const { campo1, campo2 } = req.body;

    const dados = new Dados({
        campo1,
        campo2
    });

    try {
        await dados.save();
        res.status(201).json({ mensagem: 'Dados salvos com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao salvar dados.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
