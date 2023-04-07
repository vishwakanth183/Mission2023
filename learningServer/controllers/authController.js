const Users = require('../models/users')

const Signup = (req, res, next) => {
    // console.log("Signup",req.body)
    Users.create(req.body).then((userRes) => {
        // console.log('userRes',userRes)
        res.status(201).json(userRes)
    }).catch((err) => {
        // console.log('err',err)
        res.status(406).json(err)
    })
}

module.exports.Signup = Signup