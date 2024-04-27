import React, { useEffect, useState } from 'react';
// import '../../public/movies.json'

const Home = () => {
    const [allMovies, setAllMovies]=useState([]);
    useEffect (()=>{
        fetch("./movies.json")
        .then(res=>res.json())
        .then(data=>setAllMovies(data));
    },[])
    return (
        <div>
            {allMovies.map((movie)=>(
                <div key={movie.imdbmovieid} className='card bg-[#FFF] pt-5 shadow-sm text-left'>
                <div>{movie.movietitle}</div>

                </div>
        
          
          ))}
        </div>
    );
};

export default Home;