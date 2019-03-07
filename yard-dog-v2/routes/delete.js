const express = require("express")
const deleteRouter = express.Router()
const Part = require("../models/part")
const Car = require("../models/car")

deleteRouter.delete("/part/:id", (req, res, next) => {
    Part.findOneAndRemove({ partID: req.params.id, user: req.user._id }, (err, part) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(part);
    });
});

module.exports = deleteRouter