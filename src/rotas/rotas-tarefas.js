const TarefasController = require('../controllers/tarefas-controller');
const DeletaController = require('../controllers/deleta-controller');
const AdicionaController = require('../controllers/adiciona-controller');
const AtualizarController = require('../controllers/atualiza-controller');


module.exports = (app) => {

  app.get('/', TarefasController.homeTarefas()); 

  app.post('/tarefas', AdicionaController.addTarefas());

  app.put('/tarefas/:id', AtualizarController.atualizaTarefa());

  app.delete('/tarefas/:id', DeletaController.deletaTarefa());

}

