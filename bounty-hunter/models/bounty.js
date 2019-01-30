const mongoose = require("mongoose")

const bountySchema = new mongoose.Schema({
    fname: String,
    lname: String,
    killed: Boolean,
    price: Number,
    allegiance: String
})

module.exports = mongoose.model("Bounty", bountySchema)
