const env = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
app = express()
app.use(cors())
app.use(express.json())
const firebaseMessaging = require('./firebase/firebaseinit')

const router = require('./routes/routerIndex')
app.use(router)

mongoose.connect(process.env.DB_CREDENTIALS).then((res) => {
    console.log("Connected with DB")
    console.log("firebase",firebaseMessaging.messaging)
}).catch((err) => {
    console.log("Connection err", err)
})

app.listen((process.env.PORT || 5000), () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})