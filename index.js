const express = require('express');
const router = require('./Routers/image');

var app = express();
app.use(express.json());

app.use('/image',router.router);


module.exports={
    app:app
}



