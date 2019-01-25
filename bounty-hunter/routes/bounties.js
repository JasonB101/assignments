const express = require('express')
const database = require('../database')

const bountyRouter = express.Router()

bountyRouter.route('/')
    .get((req, res) => {
        const allBounties = database.getAllItems()
        res.status(200).send(allBounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        console.log(req.body)
        const singleBounty = database.saveNewItem(newBounty)
        res.status(201).send(singleBounty)
    })

bountyRouter.route('/:id')
.get((req, res) => {
    const singleBounty = database.getItemById(req.params.id)
    res.status(200).send(singleBounty)
})
.delete((req, res) => {
    database.deleteItemById(req.params.id)
    res.status(204).send()
})
.put((req, res) => {
    const updatedBounty = database.updateItemById(req.params.id, req.body)
    res.status(201).send(updatedBounty)
})

module.exports = bountyRouter