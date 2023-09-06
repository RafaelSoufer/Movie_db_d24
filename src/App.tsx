import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMoviesAction } from './redux/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { moviesListSelector } from './redux/movies/selectors';

function App() {

  const dispatch = useDispatch<any>(); //TODO remove any from here

  const movieList = useSelector(moviesListSelector).results;



  useEffect(() => {
    dispatch(getMoviesAction())
  }, [dispatch])

  return (
    <div className="App">
      <ul>
        {movieList.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
