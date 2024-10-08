import {openDb} from "./config/configDB.js";

import express from 'express';
const app = express();
app.use(express.json());

openDb();

app.get('/', function(req,res){
    res.send("hello world");
})

app.listen(3000, ()=> console.log("api rodando"));
