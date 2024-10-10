import { openDb } from '../src/config/configDB.js';

export async function createTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status TEXT CHECK (status IN("Pendente", "Em Andamento", "Concluída"), data DATETIME DEFAULT CURRENT_TIMESTAMP) ');
    })
}