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

bookRouter.get("/user", (req, res, next) => {
    Book.find({user: req.auth._id}, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})


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
    Book.findOneAndDelete({ _id: req.params.bookId, user: req.auth._id }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delted item ${deletedItem.name} from the database`)
    })
})



bookRouter.put('/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId, user: req.auth._id },
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