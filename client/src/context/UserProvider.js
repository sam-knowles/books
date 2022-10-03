import React, { useState } from './node_modules/react'

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initSate = { user: {}, token: "", books: [] }

    const [userState, setUserState] = useState(initState)



    return (
        <UserContext.Provider
            value={{
                ...useState
            }}>
            { props.children }
        </UserContext.Provider>    )
}