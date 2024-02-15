import express, {Request , Response} from 'express';
import dotenv from 'dotenv';
import {connectToDatabase} from './db/db_initialiser';
import bodyParser from 'body-parser';
import load_user_routes from './helpers/load_user_routes';
import load_property_routes from './helpers/load_property_routes';
// import cors from 'cors';






dotenv.config();

const port = process.env.API_PORT;


const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase();
app.get('/', (req : Request, res : Response) => {
    res.send('Hello World!');
});

load_user_routes(app);
load_property_routes(app);




app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`);
});