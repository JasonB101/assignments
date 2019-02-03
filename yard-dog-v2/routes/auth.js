const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")


authRouter.post("/signup", (req, res, next) => {
    //Check to see if username is already in the collection
    User.findOne({ username: `${req.body.username}` }, (err, existingUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        else if (existingUser !== null) {
            res.status(400)
            return next(new Error("Sorry, that username is not available."))
        }

        // If we make it this far, save the User to the collection and log them in by sending a token.
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err })
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ user: user.withoutPassword(), token })
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: `${req.body.username}` }, (err, user) => {
        if (err) return res.status(500).send(err)
        if (!user) return res.status(403).send({
            success: false, message: "The username/password combination provided is incorrect"
        })
        user.checkPassword(req.body.password, (err, match) => {
            console.log(err)
            if (err) return res.status(500).send(err)
            if (!match) return res.status(403).send({
                success: false, message: "The username/password combination provided is incorrect"
            })
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ user: user.withoutPassword(), token })
        })
    })

})


module.exports = authRouter