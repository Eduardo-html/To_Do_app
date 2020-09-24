const TarefasDao = require('../DAO/tarefas-dao');
const geraPaginaTodo = require('../views/todo_app');

class TarefasController {

    constructor(db) {
        this.tarefasDao = new TarefasDao(db);
    }

    homeTarefas() {
        return (req, resp) => {
           
           
            this.tarefasDao.listaTarefas()
            .then( tarefas => {
                resp.send(geraPaginaTodo(tarefas));
            })
        }
    }
}