import express, {Express, Request, Response} from "express"
import * as http from 'http';
import dotenv from 'dotenv';
import {fileURLToPath} from "url";
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app : Express = express();

const httpServer = http.createServer(app);

const port = process.env.PORT

app.use(express.static('serverPage'));

app.get('/', (req:Request, res:Response) => {
  res.sendFile(__dirname +"/serverPage/index.html");
});
httpServer.listen(port, (): void => {
  console.log(`Server is listening on *:${port}`);
});


