const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use('/bounties', require('./routes/bounties'))







app.listen(process.env.PORT, console.log(`Server Listening on PORT ${process.env.PORT}`))