const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    messageID: String,
    username: String,
    user_id: String,
    Suggest: String,
})

module.exports = mongoose.model("suggest", Schema)