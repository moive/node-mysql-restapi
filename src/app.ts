import express from 'express';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
  return res.send('Welcome to the api');
});

export default app;
