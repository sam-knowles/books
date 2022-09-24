const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = moongoose.model("user, userSchema")