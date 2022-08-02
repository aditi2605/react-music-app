import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({username: '', password: ''})

 
function handleFormSubmit(e){
    e.preventDefault()
    setFormData({username: e.target.username.value, password: e.target.password.value})
}

  return (
<>
<form onSubmit={handleFormSubmit}>
    <input type='text' name='username' placeholder='enter your name' />
    <input type='password' name='password' />
    <input type='submit' value='Submit' />
</form>
<p>{formData.username}{formData.password}</p>
</>
  )
}

export default Form
