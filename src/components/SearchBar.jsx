import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className='container-fluid w-3/12 lg:w-3/6 sm:w-4/6 flex justify-between items-center bg-[white] px-3 text-black mt-10 h-10'>
        <input maxLength={40} type="text" placeholder='Search a movie...' className='rounded w-full border-none outline-none'/>
        <FaSearch color='black'/>
    </div>
  )
}

export default SearchBar