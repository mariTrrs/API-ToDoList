import express from 'express';
const app = express();
app.use(express.json());

import router from './routes/tarefasRoutes.js'
app.use(router);

app.listen(3000, ()=> console.log("api rodando"));
