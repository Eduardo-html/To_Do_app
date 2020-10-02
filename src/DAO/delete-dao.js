class DeletaDao {

    constructor(db) {
        this._db = db;

    }
    delete(id) { 

        return new Promise((resolve, reject) => {

            this._db.get(`DELETE FROM TAREFAS WHERE id_tarefas=?`, [id], (err) => {
                if (err) {
                      reject('Tarefa não pode ser deletada no banco de dados ');
                }else
                      resolve();
            }
            );
        });
    }

}
module.exports = DeletaDao;