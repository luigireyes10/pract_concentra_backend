import { Sequelize } from 'sequelize';


const db = new Sequelize('sakila', 'root', 'concentra', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
