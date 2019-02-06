const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: Number,
    imgurl: String,
    partID: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
   
})


module.exports = mongoose.model("Part", partSchema)

