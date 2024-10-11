import { openDb } from '../src/config/configDB.js';

/**
 * Função createTable()
 * 
 * Cria tabela 'tarefas' no banco de dados caso ela não exista. 
 * A tabela possui id, title, description, status e data.
 * @async
 */
export async function createTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, status TEXT CHECK (status IN("Pendente", "Em Andamento", "Concluída")), data DATETIME DEFAULT CURRENT_TIMESTAMP)');
    })
}

/**
 * Função insertTarefa()
 * 
 * Insere uma nova tarefa no banco de dados com title, description, status digitados e id e data automáticos.
 * @async
 * @param {Object} req - O objeto da requisição vindo do body contendo os dados da tarefa.
 * @param {Object} res - O objeto de resposta para enviar o status da operação.
 */
export async function insertTarefa(req, res) {
    let tarefa = req.body;
    openDb().then(db =>{
        db.run('INSERT INTO tarefas (title, description, status) VALUES (?,?,?)', [tarefa.title, tarefa.description, tarefa.status]);
    })
    res.json({
        "statusCode": 200
    })
}

/**
 * Função selectTarefas()
 * Retorna todas as tarefas do banco de dados.
 * @async
 * @param {Object} req - O objeto da requisição.
 * @param {Object} res - O objeto de resposta para enviar as tarefas encontradas.
 */
export async function selectTarefas(req,res) {
    openDb().then(db=>{
        db.all('SELECT * FROM tarefas')
        .then(tarefas=>res.json(tarefas))
    });
}

/**
 * Função selectByStatus()
 * Retorna as tarefas registradas no banco de dados com o status fornecido.
 * @async
 * @param {Object} req - O objeto da requisição que é o status vindo do body.
 * @param {Object} res - O objeto de resposta para enviar as tarefas encontradas.
 */
export async function selectByStatus(req, res) {
    openDb().then(db => {
        let status = req.body.status;
        db.all('SELECT * FROM tarefas WHERE status = ?', [status])
        .then(tarefas=>res.json(tarefas));
    });
}

/**
 * Função updateTarefa()
 * Atualiza uma tarefa no banco de dados com base no id fornecido.
 * @async
 * @param {Object} req - O objeto da requisição contendo os dados da tarefa de acordo com o id digitado no body.
 * @param {Object} res - O objeto de resposta para enviar o status da operação.
 */
export async function updateTarefa(req, res) {
    let { id, title, description, status } = req.body;  // Extraindo os dados do req.body

    if (!id) {
        return res.status(400).json({
            "statusCode": 400,
            "msg": "É necessário fornecer um ID para atualizar a tarefa"
        });
    }
    openDb().then(db => {   
        db.run('UPDATE tarefas SET title=?, description=?, status=? WHERE id=?', [title, description, status, id])
    });
    res.json({
        "statusCode": 200
    })
}

/**
 * Função deleteTarefa()
 * Deleta uma tarefa no banco de dados com base no id fornecido.
 * @async
 * @param {Object} req - O objeto da requisição contendo os dados da tarefa de acordo com o id digitado no body.
 * @param {Object} res - O objeto de resposta para enviar o status da operação.
 */
export async function deleteTarefa(req, res) {
    let {id} = req.body;  // Extraindo os dados do req.body

    if (!id) {
        return res.status(400).json({
            "statusCode": 400,
            "msg": "É necessário fornecer um ID para deletar a tarefa"
        });
    }
    openDb().then(db => {   
        db.run('DELETE FROM tarefas WHERE id=?', [id]);
    });
    res.json({
        "statusCode": 200
    })
}