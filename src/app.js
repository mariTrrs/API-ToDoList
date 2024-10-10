//import {openDb} from "./config/configDB.js";
import {createTable, insertTarefa} from "../controller/tarefas.js";

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

app.listen(3000, ()=> console.log("api rodando"));
