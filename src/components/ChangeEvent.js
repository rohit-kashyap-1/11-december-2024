import React, { useState } from 'react'

export default function ChangeEvent() {
   const [username,setUsername] = useState('')
   const [password,setPassword] = useState('')
   const [dept,setDept] = useState('')
   const [gender,setGender] = useState('')
   const [cities,setCities] = useState([])
   const [citiy_error,setCityError] = useState('')

   const handleForm = ()=>{
        console.log(username,password)
   }

   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username,password)
   }

  

   const handleCheck = (e)=>{
    const city = e.target.value

    //check if checkbox is checked
    //checked =  add
    //uncheck = remove

    let citiesxxx = cities
    if(e.target.checked){
        citiesxxx.push(e.target.value)
    }else{
        citiesxxx = cities.filter(function(item){
            return (item!==city)
        })
    }

    setCities(citiesxxx)

   }
  return (
    <div>
      {/* 
      input,select,radio,checkboxes
      */}
      {/* <form onSubmit={(e)=>{e.preventDefault(); console.log(username,password)}}>
        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
       <button type='button' onClick={handleForm}>Click me</button>
        <button>Submit</button>
      </form> */}

      <select onChange={(e)=>{setDept(e.target.value);}}>
        <option value={''}>Select</option>
        <option value={'Housing Affairs'}>Housing Affairs</option>
        <option value={'External Affairs'}>External Affairs</option>
        <option value={'MCD'}>MCD</option>
      </select>
      <button onClick={()=>console.log(dept)}>Get</button>
      <hr />
      <label><input name='gender' type='radio' value={'Male'} onChange={(e)=>setGender(e.target.value)} /> Male</label>
      <label><input name='gender' type='radio' value={'Female'}  onChange={(e)=>setGender(e.target.value)} /> Female</label>
      <button onClick={()=>{console.log(gender)}}>GEt GEnder</button>
      <hr />
      <label><input type='checkbox' name='cities[]' value={'New Delhi'} onChange={handleCheck} />New Delhi</label>
      <label><input type='checkbox' name='cities[]' value={'Jaipur'}  onChange={handleCheck} />Jaipur</label>
      <label><input type='checkbox' name='cities[]' value={'Agra'} onChange={handleCheck} />Agra</label>
      <div style={{ color:'red' }}>{citiy_error}</div>
      <button onClick={()=>{
        if(cities.length==0){
            setCityError('Select atleast one city')
        }else{
            setCityError('')
        }

      }}>Get Cities</button>
    </div>
  )
}
