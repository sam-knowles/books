import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Book from './components/Book.js'
import AddBookForm from './components/AddBookForm.js'

export default function App(){
    const [books, setBooks] = useState([])

    function getBooks(){
        axios.get("/books")
        .then(res => setBooks(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addBook(newBook){
        axios.post("/books", newBook)
        .then(res => {
          setBooks(prevBooks => [...prevBooks, res.data])
        })
        .catch(err => console.log(err))
      }

      function deleteBook(bookId){
        axios.delete(`/books/${bookId}`)
        .then(res => {
          setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
        })
        .catch(err => console.log(err))
      }
    
      function editBook(updates, bookId){
        axios.put(`/books/${bookId}`, updates)
        .then(res => {
          setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
        })
        .catch(err => console.log(err))
      }
    
      useEffect(() => {
        getBooks()
      }, [])
    
      return (
          <div>
            <AddBookForm 
              submit={addBook}
              btnText="Add Book"
            />
            { 
              books.map(book => 
                <Book 
                  {...book} 
                  key={book.title}
                  deleteBook={deleteBook}
                  editBook={editBook}/>)
                }
        </div>
      )
    }