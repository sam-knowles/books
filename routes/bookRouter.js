const express = require('express')
const bookRouter = express.Router()

const books = [
    { title: 'Homelander', genre: "action" },
    { title: 'Basketball', genre: "sports" },
    { title: 'Kissing', genre: "action" },
    { title: 'Tennis', genre: "sports" }
]

bookRouter.get("/", (req, res) => {
    res.send(books)
})

bookRouter.post("/", (req, res) => {
    const newBook = req.body
    books.push(newBook)
    res.send(`Successfully added ${newBook.title} to the database`)
})





module.exports = bookRouter