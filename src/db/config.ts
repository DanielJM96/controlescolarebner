import { Sequelize } from 'sequelize-typescript';
import path from 'path';



export const db = new Sequelize ({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host:     process.env.DB_HOST,
    dialect: 'mysql',
    models: [ path.join(__dirname, '../','models', 'db', '*.js' ) ]
});


db.sync({ force: false }).then(() => {
    console.log('Modelo sincronizado con la base de datos');
  }).catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
});

export const dbConnection = async () => {

    try{
        await db.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }

} 






