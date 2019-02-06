const express = require("express")
const request = require("request")
const researchRouter = express.Router()
const lib = require('../lib')


researchRouter.post('/vin', (req, res, next) => {
    lib.convertVIN(req.body.vin)
        .then(lib.getFromEbay)
        .then(ebayData => {
            return res.status(200).send(ebayData)
        })
        .catch(err => {
            res.status(500);
            next(err)
        })
})

researchRouter.post('/ymm', (req, res, next) => {
    lib.getFromEbay(req.body)
        .then(ebayData => {
            return res.status(200).send(ebayData)
        })
        .catch(err => {
            res.status(500);
            next(err)
        })
})

module.exports = researchRouter


