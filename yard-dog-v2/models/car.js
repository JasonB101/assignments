const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    vin: String,
    year: Number,
    make: String,
    model: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
   
})


module.exports = mongoose.model("Car", carSchema)

