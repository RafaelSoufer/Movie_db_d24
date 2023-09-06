import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMoviesAction } from './redux/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { moviesListSelector } from './redux/movies/selectors';
import { useAppDispatch } from './hooks/useAppDispatch';

function App() {

  const dispatch = useAppDispatch();

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
