import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)


  const handleLogin = async() => {
    if(!email || !password) {
      alert('OOPS! looks like you have missed a spot,fill out every field to continue')
      return
    }
    if(!rememberMe) {
      alert('please click remember me before you continue!')
      return
    }

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      })
      console.log(response.data)
      alert('Welcome back!  you are now logged in.')

      if(rememberMe) {
        localStorage.setItem('rememberedEmail','rememberedPassword', email, password)
      }else{
        localStorage.removeItem('remembereEmail', 'rememberedPassword')
      }
      navigate('/securedpage')
    }catch(error) {
      console.error('Error logging in:', error)
      const errorMessage = error.response?.data?.message || 'Error logging in, please try again'
      alert(errorMessage)

    }
  
  }

  

  const goToSignUp = () => {
    navigate('/')
  }


  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Welcome back baller</h1>
        <p>login back to your account to unlock your balling skills.</p>
        <div className='login-fields'>
          <label htmlFor='email'>email</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor='password'>password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        </div>
        <div className='remember-me'>
          <input type='checkbox' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
          <p>remember me</p>


        </div>
        <button onClick={handleLogin}>Continue</button>
        <p>Don't have an account?<span onClick={goToSignUp}>Signup</span></p>

      </div>
      
    </div>
  )
}

export default Login
