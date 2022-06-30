import React, {useState} from 'react'
import {Link } from "react-router-dom";
import { login } from '../firebase';
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from 'react-router-dom';
import { login as handleLogin } from "../store/auth";
import { logout as handleLogout } from '../store/auth';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const LoginForm = () => {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email,password)
    dispatch(handleLogin(user))
    if(user){
      navigate('/',{
        replace: true
      })
    }else{
      setEmail("")
      setPassword("")
    }

  }

  const logoutFunction = () => {
    setTimeout(() => {
      dispatch(handleLogout(user))
    }, 1000);
  }

  return (
    <>
    {user 
    ? <div className='flex flex-col items-center h-page w-full bg-brown pt-48'>
       <div className="bg-primary w-3/12 lg:w-3/6 md:w-4/6 sm:w-5/6 mx-auto relative overflow-hidden rounded-lg text-black">
         <div className="w-full p-6 m-auto border-t-4 border-primary rounded-md shadow-md border-top lg:max-w-md">
           <h1 className="text-3xl font-semibold text-center text-text-color">YOU ARE LOGGED IN AS</h1>
           <h3 className="mt-3 text-2xl font-semibold text-center text-text-color">{user.email}</h3>
               <div className="mt-6">
                 <button
                   className="w-full px-4 py-2 tracking-wide text-text-color transition-colors duration-200 transform bg-secondary rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 disabled:opacity-40" onClick={logoutFunction}>
                   Logout
                 </button>
               </div>
             </div>
         </div>
       </div>
    : <div className='flex flex-col items-center h-page w-full bg-brown pt-48'>
      <div className="bg-primary w-3/12 lg:w-3/6 md:w-4/6 sm:w-5/6 mx-auto relative overflow-hidden rounded-lg text-black">
        <div className="w-full p-6 m-auto border-t-4 border-primary rounded-md shadow-md border-top lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-text-color">LOGIN</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-text-color">Email</label>
              <input type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email} onChange={e => setEmail(e.target.value)}  required/>
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-text-color">Password</label>
                <input type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <Link to="/register" className="text-xs text-text-color hover:underline">Forget Password? </Link>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-text-color transition-colors duration-200 transform bg-secondary rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 disabled:opacity-40" disabled={!email || !password}>
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-text-color"> Don't have an account? <Link to="/register"
              className="font-medium text-purple-600 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>}    
    </>


  )
}

export default LoginForm