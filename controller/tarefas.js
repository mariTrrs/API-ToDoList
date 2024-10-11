import { openDb } from '../src/config/configDB.js';

export async function createTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status TEXT CHECK (status IN("Pendente", "Em Andamento", "Concluída")), data DATETIME DEFAULT CURRENT_TIMESTAMP)');
    })
}

export async function insertTarefa(req, res) {
    let tarefa = req.body;
    openDb().then(db =>{
        db.run('INSERT INTO tarefas (title, description, status) VALUES (?,?,?)', [tarefa.title, tarefa.description, tarefa.status]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function selectTarefas(req,res) {
    openDb().then(db=>{
        db.all('SELECT * FROM tarefas')
        .then(tarefas=>res.json(tarefas))
    });
}

export async function selectByStatus(req, res) {
    openDb().then(db => {
        let status = req.body.status;
        db.all('SELECT * FROM tarefas WHERE status = ?', [status])
        .then(tarefas=>res.json(tarefas));
    });
}

export async function updateTarefa(req, res) {
    openDb().then(db => {
        let tarefa = req.body;
        db.run('UPDATE tarefas SET title=?, description=?, status=? WHERE id=?', [tarefa.title, tarefa.description, tarefa.status, tarefa.id])
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteTarefa(req, res) {
    let id = req.body.id;
    openDb().then(db=>{
        db.run('DELETE FROM tarefas WHERE id=?', [id]);
    });
    res.json({
        "statusCode": 200
    })
}