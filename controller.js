const User = require('./model')


const signup =async(req,res)=>{
    const{name,email,password} = req.body

    if(!name){
        return res.status(400).send("Name field is required")
    }else if(!email){
        return res.status(400).send("Email field is required")
    }else if(!password){
        return res.status(400).send("Password field is required")
    }
    if(password<8 || password>16){
        return res.status(400).send("The length of the password should be between 8 to 16 letters")
    }

    const exsistingUser = await User.findOne({email})

    if(exsistingUser){
        return res.status(400).send("The user already exsist")
    }

    const newUser = new User({
        name,
        email,
        password
    })

    res.status(201).json({messgae:"The user is created",newUser})
    await newUser.save()
}

const showUser =async(req,res)=>{
    const users = await User.findOne()
    res.send(users)
}

module.exports = {signup,showUser}