import React, {useEffect , useState} from 'react'
import SearchBar from '../SearchBar'
import axios from 'axios'
import Card from '../Card'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"




const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=cd4db09fe52db565ea47ac340d5354ed"

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=cd4db09fe52db565ea47ac340d5354ed&query=";

const Home = () => {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")

  const getMovies = async (url) => {
    const response = await axios.get(url)
    const data = response.data.results
    console.log(data);
    setMovies(data)
  }

  useEffect(()=> {
    getMovies(FEATURED_API)
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(user){
      getMovies(SEARCH_API + query)
    }else{
      toast.error("Please login to search a movie")
      setTimeout(() => {
        navigate('/login',{
          replace: true
        })
      }, 1000);

    }

  }

  return (
    <div className='flex flex-col items-center h-auto w-full bg-brown'>
        <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
        <div className='my-24 flex flex-wrap gap-20 w-100 m-auto justify-center items-center'>
          {
            movies.map((movie)=> {
              return <Card key={movie.id} movie={movie}/>
            })

          }
        </div>

    </div>
  )
}

export default Home
