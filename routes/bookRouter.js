const express = require('express')
const bookRouter = express.Router()
const { v4: uuid } = require('uuid');

const books = [
    { title: 'Homelander', genre: "action", _id: uuid() },
    { title: 'Basketball', genre: "sports", _id: uuid() },
    { title: 'Kissing', genre: "action", _id: uuid() },
    { title: 'Tennis', genre: "sports", _id: uuid() }
]

bookRouter.get("/", (req, res) => {
    res.send(books)
})

bookRouter.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId
    const foundBook = books.find(book => book._id === bookId)
    res.send(foundBook)
})

bookRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredBooks = books.filter(book => book.genre === genre)
    res.send(filteredBooks)
})

bookRouter.post("/", (req, res) => {
    const newBook = req.body
    newBook._id = uuid()
    books.push(newBook)
    res.send(newBook)
})

bookRouter.delete("/:bookId", (req, res) => {
    const bookId = req.params.bookId
    const bookIndex = books.findIndex(book => book._id === bookId)
    books.splice(bookIndex, 1)
    res.send("successfully delete book")
})

bookRouter.put('/:bookId', (req, res) => {
    const bookId = req.params.bookId
    const updatedObject = req.body
    const bookIndex = books.findIndex(book => book._id === bookId)
    const updatedBook = Object.assign(books[bookIndex], updatedObject)
    res.send(updatedBook)
})

// bookRouter.route("/")
//     .get((req, res) => {
//         res.send(books)
//     })
//     .post((req, res) => {
//         const newBook = req.body
//         books.push(newBook)
//         res.send(`Successfully added ${newBook.title} to the database!`)
//     })





module.exports = bookRouter