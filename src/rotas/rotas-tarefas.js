const db = require('../configs/db');
const TarefasController = require('../controllers/tarefas-controller');

const tarefasController = new TarefasController(db);

module.exports = (app) => {

app.get('/', tarefasController.homeTarefas());

app.delete('/tarefas;:id', (req,resp)=>{
    console.log(`Deletei no banco tarefas: ${req.params.id}`);
    resp.json({'response': 'ok'});
});

app.post('/testeRapido', (req, resp) => {
    resp.send("Caminho sendo testado!");
});

}