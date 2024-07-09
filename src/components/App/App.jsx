import { Movies } from '../Movies/Movies'
import { useMovies } from '../../hooks/useMovies'
import { SearchInput } from '../SearchInput/SearchInput'

// Styles
import './App.css'

export const App = () => {
  const { movies, searchMovies } = useMovies()

  function handleSubmit (e) {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    searchMovies(fields.query)
  }

  return (
    <>
      <header className='header'>
        <form className='form' onSubmit={handleSubmit}>
          <SearchInput name='query' label='Search a movie' />

        </form>
      </header>
      <main>
        <section className='movie-container'>
          <Movies movies={movies} />
        </section>
      </main>
      <footer />
    </>
  )
}
