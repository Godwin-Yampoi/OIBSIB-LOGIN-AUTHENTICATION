// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'

// const Login = () => {
//   const navigate = useNavigate()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [rememberMe, setRememberMe] = useState(false) // Remember Me state

//   const handleLogin = async () => {
//     if (!email || !password) {
//       alert('Please fill all the empty fields before clicking continue!');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:3001/login', {
//         email,
//         password
//       });
//       console.log(response.data); // Handle response from server
//       alert('Welcome back! You are now logged in.');

//       // Simulate remembering login details if checkbox is checked (frontend-only)
//       if (rememberMe) {
//         localStorage.setItem('rememberedEmail', email); // Store email in local storage
//       } else {
//         localStorage.removeItem('rememberedEmail'); // Remove email from storage
//       }

//       navigate('/securedpage');
//     } catch (error) {
//       console.error('Error logging in:', error);
//       const errorMessage = error.response?.data?.message || 'Error logging in. Please try again.';
//       alert(errorMessage); // Display specific error message if available
//     }
//   };
  

//   const goToSignUp = () => {
//     navigate('/')
//   }
  
//   // Pre-fill email from local storage if Remember Me was used previously
//   React.useEffect(() => {
//     const rememberedEmail = localStorage.getItem('rememberedEmail');
//     if (rememberedEmail) {
//       setEmail(rememberedEmail);
//     }
//   }, [rememberMe]); // Update email state when Remember Me changes

//   return (
//     <div className='login'>
//       <div className='login-container'>
//         <h1>Welcome Back!</h1>
//         <p>Login to your account and unlock a world of (productivity? maybe?).</p>
//         <div className='login-fields'>
//           <label htmlFor='email'>Email (Your Login Credential)</label>
//           <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
//           <label htmlFor='password'>Password (Your Secret Code)</label>
//           <input type='password' id='password' value={password} onChange = {(e) => setPassword(e.target.value)} required/>
//           <div className='remember-me'>
//             <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
//             <p>Remember Me</p>
//           </div>
//         </div>
//         <button onClick={handleLogin}>Continue</button>
//         <p>Don't have an account? <span onClick={goToSignUp}>Signup Here</span></p>
  
//       </div>
      
//     </div>
//   )
// }

// export default Login


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
