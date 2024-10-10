//import {openDb} from "./config/configDB.js";
import {createTable, insertTarefa, selectTarefas} from "../controller/tarefas.js";

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req,res){
    res.send("hello world");
})

app.post('/tarefa', function(req,res){
    insertTarefa(req.body);
    res.json({
        "statusCode": 200
    })
});

app.get('/tarefa', async function(req,res){
    let tarefas = await selectTarefas();
    res.json(tarefas);
});

app.listen(3000, ()=> console.log("api rodando"));
