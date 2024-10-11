/**
 * app.js
 * Arquivo principal do servidor.
 * Configura middlewares, rotas e inicia o servidor.
 */

import express from 'express';
const app = express();

/**
 * Middleware para habilitar o parsing de JSON.
 */
app.use(express.json());

/**
 * Configura as rotas principais da aplicação.
 */
import router from './routes/tarefasRoutes.js'
app.use(router);

/**
 * Inicia o servidor na porta especificada.
 * @param {number} port - Porta na qual o servidor irá rodar.
 */
app.listen(3000, ()=> console.log("api rodando"));
