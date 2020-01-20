const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devradar:16a08l96i@cluster0-ekgq0.mongodb.net/devradar?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:
//Query Params: request.query  (filtros, ordenação, paginação, etc)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body:         request.body   (dados para criação ou alteração de um registro)

//MongoDB (Não relacional)
