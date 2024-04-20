import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSignUp = () => {
    if(!userName || !email || !password) {
      alert('Fill out the empty fields before clicking continue')
      return
    }


    if(agree) {
      navigate('/securedpage')
    } else {
      alert('please agree to the terms and conditions')
    }
  }


  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <div className='signup'>
      <div className='signup-container'>
        <h1>Signup</h1>
        <div className='signup-fields'>
          <label htmlFor='userName'>username</label>
          <input type='text' id='userName' value={userName}  onChange={(e) => setUserName(e.target.value)}required/>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}required/>
          <label htmlFor='password'>password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <div className='agree'>
            <input type='checkbox' checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
            <p>By clicking continue, you agree to the terms and conditions.</p>
          

          </div>



        </div>
        <button onClick={handleSignUp}>Continue</button>
        <p>Already have an account?<span onClick={goToLogin}>Login</span></p>
       

      </div>
      
    </div>
  )
}

export default Signup
