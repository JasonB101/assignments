const express = require("express")
const saveRouter = express.Router()
const Part = require("../models/part")
const Car = require("../models/car")

saveRouter.post("/part", (req, res, next) => {

    Part.findOne({ partID: `${req.body.partID}` }, (err, existingPart) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        else if (existingPart !== null) {
            res.status(400)
            return next(new Error("That part is already saved to your account."))
        }

        const newPart = new Part(req.body)
        newPart.user = req.user._id
        newPart.save((err, part) => {
            if (err) return res.status(500).send({ success: false, err })
            return res.status(200).send(part)
        })
    })
})

saveRouter.post("/car", (req, res, next) => {

    Car.findOne({ year: `${req.body.year}`, make: `${req.body.make}`, model: `${req.body.model}` }, (err, existingCar) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        else if (existingCar !== null) {
            res.status(400)
            return next(new Error("That car is already saved to your account."))
        }

        const newCar = new Car(req.body)
        newCar.user = req.user._id
        newCar.save((err, car) => {
            if (err) return res.status(500).send({ success: false, err })
            return res.status(200).send(car)
        })
    })
})


module.exports = saveRouter