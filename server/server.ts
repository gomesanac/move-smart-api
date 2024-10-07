import express from 'express';
import cors from 'cors';
import config from './config/env';
import directionsRoutes from './routes/directionsRoutes';

const app = express();

app.use(cors());

app.use('/', directionsRoutes);

app.listen(config.PORT, () => {
  console.log(`Servidor rodando na porta ${config.PORT}`);
});
