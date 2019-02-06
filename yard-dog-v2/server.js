const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJWT = require("express-jwt")

// Logged in routes
app.use("/api", expressJWT({ secret: process.env.SECRET }));

// Set up express routes and logger
app.use(morgan("dev"))
app.use(express.json())
app.use("/auth", require("./routes/auth"))
app.use("/api/research", require("./routes/research"))
app.use("/api/save", require("./routes/save"))
app.use("/api/saved", require("./routes/saved"))

// Connect to colection
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true
}, ((err) => {
    if (err) throw (err)
    console.log("Connected to MongoDB")
}))


// Handle errors
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
})

app.listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}.`))