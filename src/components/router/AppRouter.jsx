import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Provider } from 'react-redux';
import store from '../../store';


const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>      
      </Router>
    </Provider>

  )
}

export default AppRouter