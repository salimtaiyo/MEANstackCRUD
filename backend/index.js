const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/shoppinglist');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', route);

app.get('/', (req,res) => {
    res.send("yo");
});


app.listen(PORT, () => {
    console.log('the server is running on port '+ PORT);
})