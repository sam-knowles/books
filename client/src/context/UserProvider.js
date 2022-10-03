import React, { useState } from './node_modules/react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initSate = { user: {}, token: "", books: [] }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }    

    return (
        <UserContext.Provider
            value={{
                ...useState,
                signup
            }}>
            { props.children }
        </UserContext.Provider>    )
}