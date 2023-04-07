const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    username : {
        type : String,
        trim : true,
        required : [true , "username is required"]
    },
    email : {
        type : String,
        trim : true,
        required : [true , "email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ],
        unique : [true , "Email already exists"]
    },
    password : {
        type : String,
        trim : true,
        required : [true , "password is required"],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
        ]
    }
} , {timestamps : true})

module.exports = mongoose.model("Users",Users)