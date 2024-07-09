import { useRef, useState } from 'react'
import { getMovies } from '../services/getMovies'

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const prevSearch = useRef('')

  const searchMovies = async (search) => {
    if (prevSearch.current === search) return
    const newMovies = await getMovies(search)
    setMovies(newMovies)
    prevSearch.current = search
  }

  return { searchMovies, movies }
}
