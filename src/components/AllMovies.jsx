// import React from 'react';

// const AllMovies = () => {
//     return (
//         <div>
//             All Movies
//         </div>
//     );
// };

// export default AllMovies;

import React, { useEffect, useState } from 'react';


const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [languageFilter, setLanguageFilter] = useState('');
  
  
    useEffect(() => {
      fetch("./movies.json")
        .then(res => res.json())
        .then(data => {
          setAllMovies(data);
          setFilteredMovies(data);
        })
        .catch(error => console.error('Error fetching movie data:', error));
    }, []);
  
    useEffect(() => {
      filterMovies();
    }, [languageFilter]);
  
    const filterMovies = () => {
      let filtered = allMovies;
  
      if (languageFilter) {
        filtered = filtered.filter(movie => movie.movielanguages.includes(languageFilter));
      }
  
      setFilteredMovies(filtered);
    };
    return (
        <div>
      <div className=" my-5 filter-section mx-auto grid  grid-cols-1 lg:grid-cols-3">

    
      <br />  <select className='input input-bordered ml-2  rounded-none font-2xl p-2  font-normal' value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="">Filter by Language</option>
          <option value="Hindi">Hindi</option>
  <option value="Malayalam">Malayalam</option>
  <option value="Kannada">Kannada</option>
  <option value="Tamil">Tamil</option>
  <option value="English">English</option>
  <option value="Japanese">Japanese</option>
  <option value="Chinese">Chinese</option>
  <option value="Spanish">Spanish</option>
  <option value="Korean">Korean</option>
  <option value="Telugu">Telugu</option>
        </select>  
     
      </div>
      <div className="movie-list">

        <div className='w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gapx-4'>

        {filteredMovies.map((movie) => (
          <div key={movie.imdbmovieid} className='mx-auto card max-w-xs rounded overflow-hidden shadow-lg bg-[#FFF] pt-5  text-left'>
             <img className="w-full" src={movie.moviemainphotos[0]} alt={movie.movietitle} />
            <div>{movie.movietitle}</div>
            <div>Languages: {movie.movielanguages.join(', ')}</div>
            <div>Countries: {movie.moviecountries.join(', ')}</div>
            <div>Genres: {movie.moviegenres.join(', ')}</div>
          </div>
        ))}
        </div>
     
      </div>
    </div>
  );
}

export default AllMovies;