
const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    user: String,
    content: Array
})

module.exports = mongoose.model('warns', Schema)