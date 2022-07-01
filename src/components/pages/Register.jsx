import { useState } from "react"
import React from 'react'
import { register } from "../../firebase";



const Register = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email,password)
    console.log(user);
  }

  return (

    <div className='flex flex-col items-center h-auto w-full bg-brown'>
      <div className='pt-48'>
        <div className="block p-6 rounded-lg shadow-lg bg-primary max-w-md mx-auto text-black">
          <h1 className="text-3xl font-semibold text-center text-text-color">REGISTER</h1>
          <form className='mt-10' onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input autoFocus type="text" className="form-control
                  block
                  w-full
                  px-3
                  py-2
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-text-color
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   placeholder="First name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="form-group mb-6">
                <input type="text" className="form-control
                  block
                  w-full
                  px-3
                  py-2
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-text-color
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name" required value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
                w-full
                px-3
                py-2
                text-base
                font-normal
                bg-white bg-clip-padding
                border border-solid border-text-color
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required
                placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mb-6">
              <input type="password" className="form-control block
                w-full
                px-3
                py-2
                text-base
                font-normal
                bg-white bg-clip-padding
                border border-solid border-text-color
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="
              w-full
              px-6
              py-2.5
              bg-secondary
              text-text-color
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out disabled:opacity-40" disabled={!email || !password}>Sign up</button>
          </form>
        </div>        
      </div>
    </div>

  )
}

export default Register