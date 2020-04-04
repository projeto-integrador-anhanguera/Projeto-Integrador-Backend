const express = require('express');
const bodyParser = require('body-parser')
const { User } = require('./app/models/MainModels');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the API of project AutoSafe!');
});

app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.listen(3000);