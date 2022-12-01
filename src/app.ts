import express, { Express } from 'express';
import cors from 'cors';

import { ProxyRouter } from './routes/ProxyRouter';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/', ProxyRouter.init(express.Router()));
app.use('*', (req, res) => res.status(404).send('Not found'));

export default app;
