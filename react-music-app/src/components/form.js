import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({username: '', password: ''})

 
function handleFormSubmit(e){
  console.log("form target is: ", e.target.username)
    e.preventDefault()
    setFormData({username: e.target.username.value, password: e.target.password.value})
    e.target.username.value = '';
    e.target.password.value = '';

}
 useEffect(() => {

 }),[]



  return (
<>
<form onSubmit={handleFormSubmit}>
    <input type='text' name='username' placeholder='enter your name' />
    <input type='password' name='password' placeholder='enter your password' />
    <input type='submit' value='Submit' />
</form>
<p role="formDisplay">{formData.username}{formData.password}</p>
<div></div>
</>
  )
}

export default Form
