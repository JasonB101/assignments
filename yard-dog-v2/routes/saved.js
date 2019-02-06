const express = require("express")
const savedRouter = express.Router()
const Part = require("../models/part")
const Car = require("../models/car")

savedRouter.get("/parts", (req, res, next) => {

    Part.find({ user: req.user._id }, (err, parts) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(parts)
    });
})

savedRouter.get("/cars", (req, res, next) => {

    Car.find({ user: req.user._id }, (err, cars) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(cars)
    });
})


module.exports = savedRouter