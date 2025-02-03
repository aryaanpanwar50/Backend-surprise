const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./config/db')


app.use(bodyParser.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, async() => {
    try{
        await connectDB()
        console.log("The server is running on 3000");
    }catch(err){
        res.send(err.message)
    }
    
});