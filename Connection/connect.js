const mongoose = require('mongoose');
var connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ImageUploded',{useUnifiedTopology: true, useNewUrlParser: true},() =>{
            console.log("Successfully Connected")
        }); 
    } catch (error) {
        return  error
    }
     
};
module.exports ={
    connect:connect
};