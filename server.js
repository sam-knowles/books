const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/bookdb", () => console.log('connected to database'))

app.use("/auth", require("./routes/authRouter.js"))
app.use("/books", require("./routes/bookRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})