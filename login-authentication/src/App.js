import './App.css';
import Login from './Components/Login';
import {Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Securedpage from './Components/Securedpage';


function App() {
  return (
    <div className="App">
      <Routes>
      
          <Route path='/' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/securedpage' element={<Securedpage/>} />


      </Routes>
  
    </div>
  );
}

export default App;
