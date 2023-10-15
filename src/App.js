
import React, { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movies from './Components/Movies';
function App() {
  const [movies, Setmovie] = useState([]);
  const [search, Searchmovie] = useState('Avengers');
  function onchangeHandler(event) {
    console.log(event.target.value);
    Searchmovie(event.target.value);
  }


  async function getmovie() {
    try {
      const request = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=a18f3fee`);
      const response = await request.json();
      console.log(response);
      Setmovie(response.Search);
      Searchmovie('');
      if(response.Response==='False'){
        toast.warning('Movie Not Found');
      }else{
        toast.success('movie Available');
      }
    }
     catch (error) {
      toast.error('movie not found');
    }
  }
  useEffect(() => {
    getmovie();
  }, [])


  return (
    <div className="App">
      
      <Movies movies={movies} onchangeHandler={onchangeHandler} search={search} getmovie={getmovie}/>
      <ToastContainer  style={{width:'300px'}}/>
    </div>
  );
}
export default App;
