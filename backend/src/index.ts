import express from 'express';
import dotenv from 'dotenv';
import itemsRouter from './routes/items';
import enviroments from './config/enviroments';
import log from './config/logger';

dotenv.config();

const app = express();
const port = enviroments.server.port;

app.use(express.json());
app.use('/api', itemsRouter);

app.listen(port, () => {
  log.info(`Server is running on http://localhost:${port}`);
});
