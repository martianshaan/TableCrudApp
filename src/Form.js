import React, { useState } from 'react'


function About({contact,setContact}) {

  const[formData,setFormData]= useState({
    id:'',
    firstName:'',
  lastName:'',
  dob: '',
  ismarried:'',
  photourl: ''
  })


  function handleChange (e){
    const {name,value,type,checked}=e.target;
    setFormData(prevFormData=>{
      return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
      }})
      console.log(setFormData);
  }

  const handleSubmit=(e)=>{
    
    e.prevenDefault();
    const newContact= {
      id: Math.random(),
    firstName:formData.firstName,
  lastName: formData.lastName,
  dob: formData.dob,
  ismarried: formData.ismarried,
  photourl: formData.photourl
    }
const newConatcts= [...contact,newContact]
setContact(newConatcts)

setFormData({
id:'',
firstName:'',
lastName:'',
dob: '',
ismarried:'',
photourl: ''
})
}   





  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>

      <input type="text" name="firstName" placeholder='Enter a first Name' required='required' 
      value={formData.firstName} onChange={handleChange}/>
      
      <input type="text" name="lastName" placeholder='Enter a last Name' 
      required='required' value={formData.lastName} onChange={handleChange}/>

      <input type="text" name="dob" placeholder='Enter a your DOB' required='required' 
      value={formData.dob} onChange={handleChange}/>
      
      <input type="checkbox" id='ismarried'  name='ismarried'
       checked={formData.ismarried}  onChange={handleChange}/> 
      <label htmlFor="ismarried">Are you married ?</label>

      <input type="file" multiple accept='image/*' placeholder='upload image' name='photourl' onChange={handleChange}/> 
      <button type="submit" onSubmit={handleSubmit}>submit</button>
    </form>
    </div>
  )

  }
export default About



