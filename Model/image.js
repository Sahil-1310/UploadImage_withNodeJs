const moongoose = require('mongoose');

const  image = new moongoose.Schema({
    image:{
        type:String
    },
    date:{
        type:Date,default:Date.now()
    }
})

module.exports=moongoose.model('Image',image)