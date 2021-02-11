const router = require('express').Router();
const upload = require('../Storage/storage');       
const image = require('../Model/index');
//Api to upload photo on Database
router.post('/',upload.store.single('ImageUpload'),async (req,res)=>{
try {
    const Image={image : req.file.filename}
    const s1 = await (await image.image.create(Image)).save();
    console.log(`${s1}`);
    return res.json({
        status : 200,
        message : 'Uploaded successfully'
    })
} catch (error) {
    console.log(error)
    return res.send({
        error,
        status : 404 ,
        message : 'Error not uploaded'
    })
}  
})

module.exports={
    router : router
}