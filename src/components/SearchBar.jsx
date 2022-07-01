import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSubmit, query, setQuery}) => {
  
  return (
    <form onSubmit={handleSubmit} className='rounded-md container-fluid w-3/12 lg:w-3/6 sm:w-4/6 flex justify-between items-center bg-[white] px-3 text-black mt-10 h-10'>
        <input autoFocus value={query} onChange={(e)=> setQuery(e.target.value)} maxLength={40} type="text" placeholder='Search a movie...' className='w-full border-none outline-none'/>
        <button type='submit'><FaSearch color='black'/></button>
    </form>
  )
}

export default SearchBar