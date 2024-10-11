import { Router } from "express";
import {createTable, insertTarefa, selectTarefas, selectByStatus, updateTarefa, deleteTarefa} from "../../controller/tarefas.js";

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "mensagem": "API rodando"
    })
});

router.post('/tarefa', insertTarefa);
router.get('/tarefa', selectTarefas);
router.get('/tarefaByStatus', selectByStatus);
router.put('/tarefa', updateTarefa);
router.delete('/tarefa', deleteTarefa);

export default router;