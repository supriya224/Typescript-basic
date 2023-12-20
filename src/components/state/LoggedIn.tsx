import React, { useState } from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoggedIn = () => {
        setIsLoggedIn(true)
     }
    const handleLoggedOut = () => {
        setIsLoggedIn(false)
     }
    return (
        <div>
            <button className='bg-red-400 text-white m-9 p-4' onClick={handleLoggedIn}>Login</button>
            <button className='bg-red-400 text-white p-4' onClick={handleLoggedOut}>Log Out</button>
            <h2 className='bg-blue-400 p-4'>user is {isLoggedIn ?'logged in' :'logged out'} </h2>
        </div>
    )
}
