const express = require('express');
const mongoose = require("mongoose");
const app = express();


app.get('/ping', (req, res) => {
    try {
        res.status(200).send({msg:'pong'});
    } catch (error) {
        res.status(500).send({msg:"something went wrong"});
    }
});


app.listen(3000, async() => {
    try {
        await mongoose.connect("mongodb+srv://sharinisamsani422:KmK3ueLE6mzf7GJo@cluster0.7ws6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Server connected successfully!");
    } catch (error) {
        console.log("Error")
    }
    
});
