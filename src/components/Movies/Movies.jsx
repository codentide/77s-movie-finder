import React from 'react'

import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <article className='movie-card'>
      <img src={movie.poster} alt='' />
      <div className='movie-card__info'>
        <strong>{movie.title}</strong>
        <p><time dateTime={movie.release}>{movie.release}</time></p>
      </div>
    </article>
  )
}

/* Dispensador
(Verifica si hay peliculas,si las hay las arroja,
 sino manda un mensaje descriptivo)
*/
const Movies = ({ movies }) => {
  return movies.length > 0
    ? movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))
    : (<p>No se encontraron resultados</p>)
}

export { MovieCard, Movies }
