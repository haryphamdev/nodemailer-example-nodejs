import express from 'express';
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRoutes from "./routes/web";
require('dotenv').config();


let app = express();

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config viewEngine
viewEngine(app);

//init all web routes
webRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log("Node.js app is running on the port: "+port);
})
