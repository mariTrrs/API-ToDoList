//import {openDb} from "./config/configDB.js";
import {createTable} from "../controller/tarefas.js";

import express from 'express';
const app = express();
app.use(express.json());

app.get('/', function(req,res){
    res.send("hello world");
})

app.listen(3000, ()=> console.log("api rodando"));
