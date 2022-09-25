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

bookRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

// bookRouter.get("/:bookId", (req, res, next) => {
//     const bookId = req.params.bookId
//     const foundBook = books.find(book => book._id === bookId)
//     if(!foundBook){
//         const error = new Error(`The item with id ${BookId} was not found`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundBook)
// })

bookRouter.get("/search/genre", (req, res, next) => {
    Book.find({ genre: req.query.genre }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


bookRouter.delete("/:bookId", (req, res, next) => {
    Book.findOneAndDelete({ _id: req.params.bookId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delted item ${deletedItem.name} from the database`)
    })
})



bookRouter.put('/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        req.body,
        { new: true },
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})



module.exports = bookRouter