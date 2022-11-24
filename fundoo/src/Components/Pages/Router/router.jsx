import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../../Dashboard/Dashboard';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';



function RouterOne() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/dashboard' element={< Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}
export default RouterOne
