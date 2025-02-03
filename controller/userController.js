const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { username, email, password, dob } = req.body;

    if (!username) {
        return res.status(400).send("Username cannot be empty");
    } else if (!email) {
        return res.status(400).send("Email cannot be empty");
    } else if (!password) {
        return res.status(400).send("Password cannot be empty");
    } else if (!dob) {
        return res.status(400).send("DOB cannot be empty");
    } else if (password.length < 8 || password.length > 16) {
        return res.status(400).send("Password length should be between 8 and 16 characters");
    }

    const newUser = new User({
        username,
        email,
        password,
        dob
    });

    await newUser.save();
    res.status(201).json({ message: "User is created" });
};

const showUsers = async (req, res) => {
   
    res.status(200).json(User);
};

module.exports = { createUser, showUsers };