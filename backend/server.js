const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


//define port
/* 
    process.env.PORT --> Assign an available port 
*/
const PORT = process.env.PORT || 8070;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MONGODB connection succesfull!!");
});


const studentRouter = require("./routes/students.js");

app.use("/student", studentRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
});