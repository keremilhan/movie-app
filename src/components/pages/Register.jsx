import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col items-center h-page w-full bg-brown'>
      <div className='h-page pt-48'>
        <div className="block p-6 rounded-lg shadow-lg bg-primary max-w-md mx-auto text-black">
          <h1 className="text-3xl font-semibold text-center text-text-color">REGISTER</h1>
          <form className='mt-10'>
            <div className="grid grid-cols-2 gap-4">
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                  aria-describedby="emailHelp123" placeholder="First name" />
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                  aria-describedby="emailHelp124" placeholder="Last name" />
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                placeholder="Email address" />
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
                placeholder="Password" />
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
              ease-in-out">Sign up</button>
          </form>
        </div>        
      </div>
    </div>

  )
}

export default Register