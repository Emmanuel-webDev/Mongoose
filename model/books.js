const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title : String,
    authors : String,
    tel: Number
})

module.exports= mongoose.model("books", schema);