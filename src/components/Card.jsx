import React from 'react'

import {AiFillStar} from 'react-icons/ai'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const Card = ({movie}) => {

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "text-[#00FF00]";
    } else if (vote >= 6) {
      return "text-text-color";
    } else {
      return "text-[#ff4444]" ;
    }
  };

  return (
    <div className='group overflow-hidden flex flex-col justify-between w-96 h-[41rem] bg-primary rounded-2xl cursor-pointer relative'>
        <img className='w-full rounded-t-2xl' src={movie.poster_path ? IMG_API + movie.poster_path : defaultImage} alt={movie.title} />
        <p className='p-5 text-lg absolute bottom-0 left-0 translate-x-full group-hover:translate-x-0 transition duration-500 ease-in-out delay-150 text-text-color bg-primary rounded-b-2xl'>{movie.overview}</p>
        <div className='flex justify-between px-3 my-auto items-center text-text-color'>
            <h1 className='text-lg text-center'>{movie.title}</h1>
            <div className="flex items-center gap-1 bg-[#253237] p-1 pr-2 rounded-md">
              <AiFillStar color='#F5C518' fontSize={20}/>
              <p className={`${setVoteClass(movie.vote_average)} font-bold`}>{movie.vote_average}</p>
            </div>

        </div>

    </div>
  )
}

export default Card