const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")


authRouter.post("/signup", (req, res, next) => {
    //Check to see if email is already in the collection
    User.findOne({ email: `${req.body.email}` }, (err, existingUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        else if (existingUser !== null) {
            res.status(400)
            return next(new Error("Sorry, there is an account linked to that email already."))
        }

        // If we make it this far, save the User to the collection and log them in by sending a token.
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err })

            //Login and send token
            return res.status(200).send(loginUserInfo(user))
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ email: `${req.body.email}` }, (err, user) => {
        if (err) return res.status(500).send(err)
        if (!user) return res.status(403).send({
            success: false, message: "The email/password combination provided is incorrect"
        })
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) return res.status(403).send({
                success: false, message: "The email/password combination provided is incorrect"
            })

            // Login and send token
            return res.status(200).send(loginUserInfo(user))
        })
    })

})

const loginUserInfo = (user) => {
return {
    user: user.withoutSensitiveInfo(), 
    token: jwt.sign(user.withoutSensitiveInfo(), process.env.SECRET)
}
}


module.exports = authRouter