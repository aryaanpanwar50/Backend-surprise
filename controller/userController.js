const User = require('../models/userModel')

const createUser = async(req,res)=>{
    const{username,email,password,dob} = req.body

    if(username ==""){
        res.send("Username cannot be empty")
    }else if(email==""){
        res.send("email cannot be empty")
    }else if(password==""){
        res.send("password cannot be empty")
    }else if(dob==""){
        res.send("dob cannot be empty")
    }else if(!(8<=password.length>=16)){
        res.send("Password length should be greater than 8 or less than or equal to 16")
    }

    const newUser = new User({
        username,
        email,
        password,
        dob
    })

    res.status(201).json({message:"User is created"})
    await newUser.save()
}
const showUsers = async(req,res)=>{
    res.send({User})
}

module.exports = {createUser,showUsers}