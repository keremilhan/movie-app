import React from 'react'
import {Outlet, Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className='flex flex-col items-center h-page w-full bg-brown pt-48'>
      <div className="bg-primary w-3/12 lg:w-3/6 md:w-4/6 sm:w-5/6 mx-auto relative overflow-hidden rounded-lg text-text-color">
        <div className="w-full p-6 m-auto border-t-4 border-primary rounded-md shadow-md border-top lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700">LOGIN</h1>
          <form className="mt-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
              <input type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                <input type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <Link to="/register" className="text-xs text-gray-600 hover:underline">Forget Password? </Link>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-secondary rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to="/register"
              className="font-medium text-purple-600 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>

  )
}

export default LoginForm