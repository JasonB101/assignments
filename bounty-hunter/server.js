const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

//Routes
app.use('/api/bounties', require('./routes/bounties'))

//handle errors
app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

//Connect to Mongo Database
mongoose.connect(process.env.MONGODB_URI, () => console.log(`Connected to MongoDB`))

app.listen(process.env.PORT, console.log(`Server Listening on PORT ${process.env.PORT}`))