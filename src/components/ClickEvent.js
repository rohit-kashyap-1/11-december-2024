import React, { useState } from 'react'

export default function ClickEvent() {

    const [name, setName] = useState('demo')

    //handler function
    const handleClick = (e) => {
        const n = e.target.getAttribute('data-name')
        console.log(n)
    }
    const handleChange = (e)=>{
      setName(e.target.value)
    }

    
    return (
        <div>
            <button data-name="amit sharma" onClick={handleClick}>Click me</button>
            <input type='text' onChange={handleChange} />
        </div>
    )
}
