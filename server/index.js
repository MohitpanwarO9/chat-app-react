const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();
const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`server is now on at port  ${port}`);
})

app.use(cors());
app.use(express.json());