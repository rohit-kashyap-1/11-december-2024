import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(function () {
        setTimeout(function(){
            fetch('https://dummyjson.com/users').then(response => response.json()).then(function (data) {

              /*   data = JSON.parse(data) */
                setUsers(data.users)
            })
        },4000)
    }, [])
    return (
        <div className='container mt-5'>

            <table className='table table-dark table-striped table-hover     table-bordered'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>
                </tr>
                {(users.length != 0) ? users.map(function (item, index) {
                    return <tr key={index}>
                        <td>{item.firstName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td><img src='https://dummyjson.com/icon/oliviaw/128' width={50} /></td>
                    </tr>

                }) : <div>Please wait.... data is fetching....</div>}
            </table>

        </div>
    )
}
