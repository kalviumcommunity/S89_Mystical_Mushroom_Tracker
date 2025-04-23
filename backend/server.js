const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());


app.get('/ping', (req, res) => {
    try {
        res.status(200).send({msg:'pong'});
    } catch (error) {
        res.status(500).send({msg:"something went wrong"});
    }
});

const router = require("./router");
app.use("/mush",router);


app.listen(3000, async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server connected successfully!");
    } catch (error) {
        console.log("Error",error);
    }


});
