import express from 'express';
import router from './routers/router.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);

app.listen(9000, () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});