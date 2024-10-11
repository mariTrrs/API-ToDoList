/**
 * tarefasRoutes.js
 * Define as rotas da aplicação.
 */

import { Router } from "express";
import {insertTarefa, selectTarefas, selectByStatus, updateTarefa, deleteTarefa} from "../../controller/tarefas.js";

const router = Router();

/**
 * Rota para testar a conexão do servidor.
 * @name GET/
 * @function
 * @memberof module:routes
 */
router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "mensagem": "API rodando"
    })
});

/**
 * Rota para inserir uma tarefa.
 * @name POST/tarefa
 * @function
 * @memberof module:routes
 */
router.post('/tarefa', insertTarefa);

/**
 * Rota para mostrar todas as tarefas registradas.
 * @name GET/tarefa
 * @function
 * @memberof module:routes
 */
router.get('/tarefa', selectTarefas);

/**
 * Rota para mostrar as tarefas registradas a partir do status.
 * @name GET/tarefaByStatus
 * @function
 * @memberof module:routes
 */
router.get('/tarefaByStatus', selectByStatus);

/**
 * Rota para editar as tarefas registradas a partir do id digitado.
 * @name PUT/tarefa
 * @function
 * @memberof module:routes
 */
router.put('/tarefa', updateTarefa);

/**
 * Rota para deletar a tarefa registrada a partir do id digitado.
 * @name DELETE/tarefa
 * @function
 * @memberof module:routes
 */
router.delete('/tarefa', deleteTarefa);
export default router;