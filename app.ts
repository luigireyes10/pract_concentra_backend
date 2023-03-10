import dotenv from 'dotenv';
import Server from './services/server';

// Configurar dot.env

const initAppServe = async (): Promise<void> => {
dotenv.config();

const server = new Server();
server.listen();
}

initAppServe()