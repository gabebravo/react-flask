import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Movies from './components/Movies';
import './App.css';

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="App">
        <Movies />
      </div>
    </>
  );
}

export default App;
