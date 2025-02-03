const express = require('express');
const router = require('./routes/userRoutes');
const app = express();

app.use('/api', router);
app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("The server is running on 3000");
});