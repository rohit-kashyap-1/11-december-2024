import React from 'react'
import { useState } from 'react'
import './Profile.css'


export default function Profile() {
  const [fname,setFname] = useState({value:'',error:''})
  const [lname,setLname] = useState({value:'',error:''})
  const [gender,setGender] = useState({value:'',error:''})
  const [phone,setPhone] = useState({value:'',error:''})
  const [email,setEmail] = useState({value:'',error:''})
  const [city,setCity] = useState({value:'',error:''})
  const [image,setImage] = useState({value:'/images/photo.png',error:''})

  const handleSubmit = (e)=>{
    e.preventDefault() //prevent from redirect/referesh

    const data = {
        name:fname.value + ' '+lname.value,
        email:email.value,
        phone:phone.value,
        gender:gender.value,
        city:city.value,
        image:image.value
    }

    const data_json = JSON.stringify(data)


    //fetch
    //axios
    //validation
        //JSON.stringify(data)
    //send to api
    

  }
  return (
    <div style={{ maxWidth:500,margin:'auto' }}>
        <form method="" action='' className='mt-4' onSubmit={handleSubmit}>
        <div className='row mb-3'>
                <div className='col-6'>
                    <label className='image-pick' style={{ backgroundImage:"url('"+image.value+"')" }}>
                        <input type='file' accept='.jpg,.png' onChange={(e)=>{
                            const image = e.target.files[0] //'phpnet_logo.png'
                            const img = URL.createObjectURL(image)
                            setImage({value:img,error:image.error})
                        }} />
                    </label>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-6'>
                    <input type='text' placeholder='First name' className='form-control' value={fname.value} 
                    onChange={(e)=>{setFname({value:e.target.value,error:fname.error})}} />
                </div>
                <div className='col-6'>
                    <input type='text' placeholder='Last name' className='form-control' value={lname.value} 
                    onChange={(e)=>{setLname({value:e.target.value,error:lname.error})}} />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-6'>
                    <input type='text' placeholder='Email' className='form-control' value={email.value} 
                    onChange={(e)=>{setEmail({value:e.target.value,error:email.error})}} />
                </div>
                <div className='col-6'>
                    <input type='text' placeholder='Phone' className='form-control' value={phone.value} 
                    onChange={(e)=>{setPhone({value:e.target.value,error:phone.error})}} />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-6'>
                    <label>Gender: &nbsp;
                        <label><input type='radio' name='gender' value='Male' 
                        onChange={(e)=>setGender({value:'Male',error:gender.error})} /> Male</label> &nbsp;
                        <label><input type='radio' name='gender' value='Male' 
                        onChange={(e)=>setGender({value:'Female',error:gender.error})} /> Female</label>
                    </label>
                </div>
                <div className='col-6'>
                    <select className='form-control form-select' value={city.value}>
                        <option value={''}>Select City</option>
                        <option value={'New Delhi'}>New Delhi</option>
                        <option value={'Jaipur'}>Jaipur</option>
                        <option value={'Agra'}>Agra</option>
                    </select>
                </div>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}
