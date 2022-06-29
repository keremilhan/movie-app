import React from 'react'
import {Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='container-fluid h-20'>
        <nav className='bg-primary flex h-full items-center justify-between text-text-color text-2xl px-10'>
            <h1>
              <Link to="/">Movies</Link>
            </h1>
            <ul className='flex justify-between gap-5'>
                <li className='w-24 hover:bg-brown text-center h-10 cursor-pointer rounded-lg transition-all'>
                    <Link to="/login">Login</Link>
                </li>
                <li className='w-24 hover:bg-brown text-center h-10 cursor-pointer rounded-lg transition-all'>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Header