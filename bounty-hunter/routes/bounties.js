const express = require('express')
const Bounty = require('../models/bounty')

const bountyRouter = express.Router()

bountyRouter.route('/')
    .get((req, res, next) => {
        Bounty.find()
            .then((foundBounty) => res.status(200).send(foundBounty))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .post((req, res, next) => {
        const newBounty = req.body
        const bountyDoc = new Bounty(newBounty)
        bountyDoc.save()
            .then(savedBounty => res.status(201).send(savedBounty))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })

bountyRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        Bounty.find(id)
            .then(foundBounty => res.status(200).send(foundBounty))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })
    .delete((req, res, next) => {
        const id = req.params.id
        Bounty.findByIdAndDelete(id)
        .then(() => res.status(204).send())
        
    })
    .put((req, res, next) => {
        const id = req.params.id
        Bounty.findByIdAndUpdate(id, req.body, {new: true})
        .then(updatedBounty => res.status(201).send(updatedBounty))
        .catch(err => {
            res.status(500)
            next(err)
        })
        
    })

module.exports = bountyRouter