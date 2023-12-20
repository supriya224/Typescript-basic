import React from 'react'

export const User = () => {
    const handleLogin = () => {}
    const handleLogout=()=>{

    }
  return (
    <div>
        <h1>user name is</h1>
        <h1>user email is</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
