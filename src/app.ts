import express from 'express';
import routes from './routes';

const app = express().use(express.json()).use(routes);

export default app;
