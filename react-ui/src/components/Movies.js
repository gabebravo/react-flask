import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMovies = async () => {
  const { data } = await axios.get('/movies');
  return data;
};

function Movies() {
  // this fetch wont run again on the re-render, RQ cache
  const { data, status } = useQuery('movies', fetchMovies);
  const [isToggled, setToggle] = useState(false);

  const MovieList = () => {
    return data?.movies.map(({ id, title, rating }) => {
      return (
        <div key={id}>
          <h3>{`title: ${title}`}</h3>
          <h3>{`rating: ${rating}`}</h3>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <h3>{`Toggle state is: ${isToggled}`}</h3>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'error' && <div>Error fetching movies</div>}
        {status === 'success' && (
          <div>
            <MovieList />
          </div>
        )}
      </div>
      <button onClick={() => setToggle((tg) => !tg)}>Toggle State</button>
    </>
  );
}
export default Movies;
