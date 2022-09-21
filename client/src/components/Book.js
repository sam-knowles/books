import React, { useState } from 'react'
import AddBookForm from './AddBookForm.js'

export default function Book(props){
    const { title, genre, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
            <>
                <h1>Title: { title }</h1>
                <p>Genre: { genre }</p>
                <button
                    onClick={() => props.deleteBook(_id)}>
                    Delete
                </button>
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
                <>
                    <AddBookForm 
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editBook}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}