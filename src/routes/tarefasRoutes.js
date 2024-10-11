import express from "express";
import {createTable, insertTarefa, selectTarefas, selectByStatus, updateTarefa, deleteTarefa} from "../../controller/tarefas.js";

const router = Router();



export default router;