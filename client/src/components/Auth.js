import React, { useState } from 'react'
import AuthFormn from './AuthForm.js'

const initInputs = {username: "", password: "" }

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevImputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
    }

    function HandleLogin(e){
        e.preventDefault()
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