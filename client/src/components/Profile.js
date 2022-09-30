import React from 'react'
import BookForm from './BookForm.js'
import BookList from './BookList.js'
import Book from './Book.js'

export default function Profile(){
    return (
        <div>
            <h1>Welcome @Username!</h1>
            <h3>Add a Book</h3>
            <BookForm />
            <h3>Your Books</h3>
        </div>
    )
}