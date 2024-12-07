import './styles/global.css'
import './styles/profile.css'
import React from "react";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App