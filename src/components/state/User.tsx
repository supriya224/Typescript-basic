import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null) //here we declare the type of function by which name can get string or not
    const [user, setUser] = useState<AuthUser>({} as AuthUser) //it return the auth user object
    const handleLogin = () => {
        setUser({
            name:'supriya maurya',
            email:'supiryam223@gmail.com'
        })
    }
   
    return (
        <div>
            user typescript component changes file
            {/* <h1>my name is {user ?. name}</h1>
            <h1>my email is {user ?. email}</h1> */}
             <h1>my name is {user . name}</h1>
            <h1>my email is {user . email}</h1>
            <button className='bg-blue-500 text-white m-9 p-5' onClick={handleLogin}>Login</button>
           
            {/* <button className='bg-blue-900 text-white m-9 p-5' onClick={handleLogout}>Logout</button> */}
        </div>
    )
}
