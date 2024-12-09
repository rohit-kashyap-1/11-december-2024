import React, { useState } from 'react'

export default function Login({ isLogin, setIsLogin }) {
    const [username, setUsername] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })


    const login = (e)=>{
        e.preventDefault()
        const admin_username = 'admin'
        const admin_password = 'rohit@123'

        if(username.value===admin_username && password.value===admin_password){
            setIsLogin(true)
        }else{
            alert('Sorry, username password wrong')
        }
    }
    return (
        <form onSubmit={login} style={{ width: 500, margin: 'auto',padding:50 }}>
            <input type='text' className='mb-3 form-control' value={username.value}
                onChange={(e) => setUsername({ value: e.target.value })} placeholder='Username'
            />
            <input type='text' className='mb-3 form-control' value={password.value}
                onChange={(e) => setPassword({ value: e.target.value })} placeholder='Password'
            />
            <button className='btn btn-success'>Login</button>
        </form>
    )
}
