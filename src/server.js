const express = require('express');
const rotasTarefas = require('./src/rotas/rotas-tarefas');


const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/src/public/'));
/*app.use('/static', express.static('./src/static/'));*/

//adicionando as rotas das tarefas
rotasTarefas(app);

app.listen(port, ()=> console.log(`Servidor inicializado!${__dirname}`));

module.exports = app;



