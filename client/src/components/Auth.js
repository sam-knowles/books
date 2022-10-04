import React, { useState, useContext } from 'react'
import AuthFormn from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = {username: "", password: "" }

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevImputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function HandleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return (
        <div>
            <h1>Book App</h1>
            { !toggle ?
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Sign up"
                />
                <p> onClick={() => setToggle(prev => !prev)}>Already a member?</p>
            </>
        :
            <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                />
                <p> onClick={() => setToggle(prev => !prev)}>Not a member?</p>
            </>    
        }
        </div>
    )
}