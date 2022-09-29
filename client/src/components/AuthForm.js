import React from 'react'
export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <input
                tupe="test"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"/>
            <input
                tupe="test"
                value={password}
                name="pasword"
                onChange={handleChange}
                placeholder="Password"/>
            <Button>{ btnText }</Button>
        </form>
    )
}



// import React from 'react'
// import { Switch, Route} from 'react-router-dom'
// import Navbar from './components/Navbar.js'
// import Auth from './components/Auth.js'
// import Profile from './components/Profile.js'
// import Public from './components/Public.js'
// import App from '../App.js'


// export default function App(){
//     return (
//         <div>
//             <Navbar />
//             <Switch>
//                 <Route
//                     exact path ="/"
//                     render={()=> <Auth />}
//                 />
//                  <Route
//                     exact path ="/profile"
//                     render={()=> <Profile />}
//                 />
//                  <Route
//                     exact path ="/public"
//                     render={()=> <Public />}
//                 />
//             </Switch>
//         </div>
//     )
// }

