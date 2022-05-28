import React from 'react'

function Input({setUser}) {
    return (
        <>
            <input type="text" placeholder="User" onChange={(e) => setUser(e.target.value)}></input>
        </>
    )
}

export default Input