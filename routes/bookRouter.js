const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


bookRouter.get("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId
    const foundBook = books.find(book => book._id === bookId)
    if(!foundBook){
        const error = new Error(`The item with id ${BookId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBook)
})

bookRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredBooks = books.filter(book => book.genre === genre)
    res.send(filteredBooks)
})


bookRouter.post("/", (req, res) => {
    const newBook = req.body
    books.push(newBook)
    res.status(201).send(newBook)
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
    res.status(201).send(updatedBook)
})



module.exports = bookRouter