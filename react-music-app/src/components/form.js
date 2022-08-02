import React, { useState } from 'react'

function Form() {
    const [formData, setFomData] = useState({username: '', password: ''})

    const handleInput = e => {
        const { name, value } = e.target;
        setFormData
    }
  return (
<>
<form onsubmit={handleFormSubmit}>
    <input type='text' name='nameInput' placeholder='enter your name'
    value={formData.username} onchange={handleInput} />
    <input type='password' name='password' value={formData.password} onchange={handleInput} />
    <input type='submit' value='Submit' />
</form>
</>
  )
}

export default Form
