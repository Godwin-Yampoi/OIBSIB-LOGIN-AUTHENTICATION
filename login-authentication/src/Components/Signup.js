import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)


  const handleSignUp = async() => {
    if(!username || !email || !password) {
      alert('OOPS! looks like you have missed a spot,fill out every field to continue')
      return
    }

    if(!agree) {
      alert('You must agree with the terms and conditions before joining the ballers!')
      return
    }

    try {
      const response = await axios.post('http://localhost:3001/register', {
        username,
        email,
        password
      })
      console.log(response.data)
      alert('Welcome aboard, ' + username +   '!your account is ready to use')
      navigate('/securedpage')
    } catch (error) {
      console.log('Error signing up:', error)
      alert('Something went wrong,please try again later.')
    }
  }




  const goToLogin = () => {
    navigate('/login')
  }



  return (
    <div className='signup'>
      <div className='signup-container'>
        <h1>Welcome baller!</h1>
        <p>Create an account to join the rising ballers community.</p>
        <div className='signup-fields'>
          <label htmlFor='username'>username</label>
          <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}  />
          <label htmlFor='email'>email</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor='password'>password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className='agree'>
            <input type='checkbox' checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
            <p>By clicking continue,you agree to the terms and condition!</p>

          </div>

        </div>

        <button onClick={handleSignUp}>Continue</button>
        <p>Already a registered baller?<span onClick={goToLogin}>Login</span></p>


      </div>
      
    </div>
  )
}

export default Signup
