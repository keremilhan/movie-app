import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const Card = ({movie}) => {
  return (
    <div className='group overflow-hidden flex flex-col justify-between w-96 bg-primary rounded-2xl cursor-pointer relative'>
        <img className='w-full rounded-t-2xl' src={movie.poster_path ? IMG_API + movie.poster_path : defaultImage} alt={movie.title} />
        <p className='px-3 py-2 absolute bottom-0 left-0 translate-x-full group-hover:translate-x-0 transition duration-500 ease-in-out delay-150 text-text-color bg-primary rounded-b-2xl'>{movie.overview}</p>
        <div className='flex justify-between px-3 py-5 text-text-color'>
            <h1 className='text-md text-center'>{movie.title}</h1>
            <p className=''>{movie.vote_average}</p>
        </div>

    </div>
  )
}

export default Card