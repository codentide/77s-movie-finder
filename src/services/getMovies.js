const imgBaseUrl = import.meta.env.VITE_IMG_BASE_URL
const urlBase = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const getMovies = async (query = 'Avengers') => {
  const res = await fetch(`${urlBase}/search/movie?api_key=${apiKey}&query=${query}`)
  const data = await res.json()
  return data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    release: movie.release_date || 'n/a',
    overview: movie.overview || 'No overview provided',
    poster: (movie.poster_path
      ? `${imgBaseUrl}${movie.poster_path}`
      : 'https://placehold.co/243x364/222/444?text=no+image')
  }))
}
