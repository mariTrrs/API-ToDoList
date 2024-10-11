import { openDb } from '../src/config/configDB.js';

export async function createTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status TEXT CHECK (status IN("Pendente", "Em Andamento", "Concluída")), data DATETIME DEFAULT CURRENT_TIMESTAMP)');
    })
}

export async function insertTarefa(tarefa) {
    openDb().then(db =>{
        db.run('INSERT INTO tarefas (title, description, status) VALUES (?,?,?)', [tarefa.title, tarefa.description, tarefa.status]);
    })
}

export async function selectTarefas() {
    return openDb().then(db=>{
        return db.all('SELECT * FROM tarefas')
        .then(res=>res)
    });
}

export async function selectByStatus(status) {
    return openDb().then(db => {
        return db.all('SELECT * FROM tarefas WHERE status = ?', [status.status])
        .then(res => res);
    });
}