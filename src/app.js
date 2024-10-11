import express from 'express';
const app = express();
app.use(express.json());

import router from './routes/tarefasRoutes.js'
app.use(router);

// app.get('/', function(req,res){
//     res.send("hello world");
// })

// app.post('/tarefa', function(req,res){
//     insertTarefa(req.body);
//     res.json({
//         "statusCode": 200
//     })
// });

// app.get('/tarefa', async function(req,res){
//     let tarefas = await selectTarefas();
//     res.json(tarefas);
// });

// app.get('/tarefaByStatus', async function(req,res){
//     let tarefas = await selectByStatus(req.body);
//     res.json(tarefas);
// });

// app.put('/tarefa', async function(req,res) {
//     let tarefa = req.body;

//     if (!tarefa.id) {
//         return res.status(400).json({
//             "statusCode": "400",
//             "msg": "É necessário digitar um ID"
//         });
//     }

//     await updateTarefa(tarefa); 
//     res.status(400).json({
//         "statusCode": 200,
//         "msg": "Tarefa atualizada com sucesso"
//     });
// })

// app.delete('/tarefa', async function(req,res){
//     let tarefa = await deleteTarefa(req.body.id);
//     if (!req.body.id) {
//         return res.status(400).json({
//             "statusCode": 400,
//             "msg": "É necessário um ID para deletar a tarefa"
//         });
//     }

//     await deleteTarefa(tarefa);
//     res.status(200).json({
//         "statusCode": 200,
//         "msg": "Tarefa excluída com sucesso"
//     });

// });

app.listen(3000, ()=> console.log("api rodando"));
