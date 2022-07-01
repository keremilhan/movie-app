import React from 'react'
import {Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  const {user} = useSelector(state => state.auth)
  return (
    <div className='container-fluid h-20'>
        <nav className='bg-primary flex h-full items-center justify-between text-text-color text-2xl px-10'>
            <h1>
              <Link to="/">Movies</Link>
            </h1>
            <ul className={user ? 'flex items-center' :'flex justify-between gap-5 items-center'}>
                <li className="w-24">
                    <Link className={user ? 'my-auto' :'w-24 px-5 pb-2 pt-1 hover:bg-brown text-center h-10 cursor-pointer rounded-lg transition-all'} to="/login">{user ? <FaUserAlt /> :"Login"}</Link>
                </li>
                <li className="w-24">
                    <Link className='w-24 px-5 pb-2 pt-1 hover:bg-brown text-center h-10 cursor-pointer rounded-lg transition-all' to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Header