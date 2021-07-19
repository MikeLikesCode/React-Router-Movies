import React from 'react';
import { useHistory } from 'react-router-dom'

export default function MovieList(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  let history = useHistory();
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card" onClick={ () => history.push(`/movies/${id}`) } >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
