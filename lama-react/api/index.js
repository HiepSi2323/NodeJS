const express =  require("express");
const app = express();
const mongoose = require("mongoose"); 
const dotenv = require('dotenv');
const route =  require('./src/routers/index.route');
const db = require('./src/config/db');
dotenv.config();
app.use(express.json());

db.connect();
// middle ware
route(app);

app.listen(process.env.PORT, ()=>{
    console.log("server is running"); 
});