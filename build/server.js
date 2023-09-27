import express from "express";
import * as http from 'http';
import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const port = 4444;
app.use(express.static('serverPage'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/serverPage/index.html");
});
httpServer.listen(port, () => {
    console.log(`Server is listening on *:${port}`);
});
//# sourceMappingURL=server.js.map
