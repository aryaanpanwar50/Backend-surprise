const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://aryaanpanwar:ISlmiFXvPpMuloZ5@cluster0.iwqxg.mongodb.net/')
    }catch(err){
        console.log(err.message)
    }
}

module.exports = connectDB;