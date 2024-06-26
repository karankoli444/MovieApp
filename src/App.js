
import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './Components/Movies';
import { MdMovie } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
function App() {
  const [movies, Setmovie] = useState([]);
  const [search, Searchmovie] = useState('Avengers');
  const[loading,setloading]=useState(false);

  console.log(movies);

  function onchangeHandler(event) {
    console.log(event.target.value);
    Searchmovie(event.target.value);
  }
 
  async function getmovie() {
    try {
      setloading(true)
      const request = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=a18f3fee`);
      const response = await request.json();
      console.log(response);
      if(response.Search.Response==='False'){
        toast.error('Movie not Found ')
        setloading(false);
        Searchmovie('');
      }else{
        Setmovie(response.Search)
        setloading(false);
        Searchmovie('');
      }
     
    }
     catch (error) {
      toast.error('movie not found');
      setloading(false);
    }
  }
useEffect(()=>{
  getmovie();
}, [])


  return (
    <div className="max-w-[1340px] h-screen  mx-auto px-5">
      <div className='max-w-[200px] mt-8 mx-auto flex justify-center items-center'>
        <MdMovie className='text-[#ffff1a] text-4xl' /><span className='text-2xl'>Movie.com</span>
      </div>
      {/* Search Container */}
      <div className='max-w-[600px] h-[80px] flex justify-center gap-2 items-center mx-auto '>
        <input className='w-[400px] p-2  rounded-full outline-none text-[#0e0f1d] text-lg text-center' type='text' value={search} onChange={onchangeHandler} placeholder="Search movie" />
        <button className='w-[50px] h-[50px] bg-[#969EAE]  text-[#fff] flex justify-center items-center rounded-full' onClick={getmovie}><FaSearch className=' text-2xl' /></button>
      </div>
      <Movies loading={loading} movies={movies}/>
    </div>
  );
}
export default App;
