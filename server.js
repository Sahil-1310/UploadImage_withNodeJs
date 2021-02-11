const index = require('./index');
const connection = require('./Connection/connect');


//connected to database
connection.connect();

// Connected to App
index.app.listen(4000,()=>{
    console.log("connected to port_no 4000");
})

// const express = require('express');
// const app = express();
// app.get('/',(req,res,next)=>{
//     console.log("Home page");
//     res.send("home page");
//     next();
// });
// app.use(logger);

// app.get('/user',(req,res)=>{
//     console.log("user ");
//     res.send("user page");
// });

// function logger(req,res,next){
//     console.log('log');
//     res.sendStatus(200).json({message:'ok'})
//     next();
//     return console.log("logger");
// }


// app.listen(8000);

