import React, {useEffect , useState} from 'react'
import SearchBar from '../SearchBar'
import axios from 'axios'
import Card from '../Card'


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=cd4db09fe52db565ea47ac340d5354ed"

const Home = () => {

  const [featuredMovies, setFeauteredMovies] = useState([])

  const getFeaturedMovies = async (url) => {
    const response = await axios.get(url)
    const data = response.data.results
    console.log(data);
    setFeauteredMovies(data)
  }

  useEffect(()=> {
    getFeaturedMovies(FEATURED_API)
  }, [])

  return (
    <div className='flex flex-col items-center h-auto w-full bg-brown'>
        <SearchBar />
        <div className='my-24 flex flex-wrap gap-20 w-100 m-auto justify-center items-center'>
          {
            featuredMovies.map((movie)=> {
              return <Card key={movie.id} movie={movie}/>
            })

          }
        </div>

    </div>
  )
}

export default Home
