// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'

// const Signup = () => {
//   const navigate = useNavigate()
//   const [username, setUsername] = useState('') // Correct function name
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [agree, setAgree] = useState(false)

//   const handleSignUp = async () => {
//     if (!username || !email || !password) {
//       alert('Oops! Looks like you missed a spot. Fill out all the fields to create your account.')
//       return
//     }

//     if (!agree) {
//       alert('Hold on a sec! Agreeing to our terms and conditions is a must to join the fun.')
//       return
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/register', {
//         username,
//         email,
//         password
//       });
//       console.log(response.data);
//       alert('Welcome aboard, ' + username + '! Your account is ready to use.')
//       navigate('/securedpage');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       alert('Uh oh, something went wrong. Try signing up again later.');
//     }
//   };

//   const goToLogin = () => {
//     navigate('/login')
//   }

//   return (
//     <div className='signup'>
//       <div className='signup-container'>
//         <h1>Welcome Adventurer!</h1>
//         <p>Create your account and unlock a world of treasures (well, maybe just discounts).</p>
//         <div className='signup-fields'>
//           <label htmlFor='userName'>Username (Your Secret Alias)</label>
//           <input type='text' id='userName' value={username} onChange={(e) => setUsername(e.target.value)} required/>
//           <label htmlFor='email'>Email (Your Treasure Map)</label>
//           <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
//           <label htmlFor='password'>Password (Your Secret Code)</label>
//           <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
//           <div className='agree'>
//             <input type='checkbox' checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
//             <p>By clicking continue, you agree to our terms and conditions (the not-so-secret rules).</p>
//           </div>
//         </div>
//         <button onClick={handleSignUp}>Embark on your Adventure!</button>
//         <p>Already have a treasure map?<span onClick={goToLogin}>Login Here</span></p>
//       </div>
//     </div>
//   )
// }

// export default Signup

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
