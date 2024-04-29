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
import { Link } from 'react-router-dom';


const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');


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
  }, [languageFilter, countryFilter, genreFilter]);

  const filterMovies = () => {
    let filtered = allMovies;

    if (languageFilter) {
      filtered = filtered.filter(movie => movie.movielanguages.includes(languageFilter));
    }
    if (countryFilter) {
      filtered = filtered.filter(movie => movie.moviecountries.includes(countryFilter));
    }
    if (genreFilter) {
      filtered = filtered.filter(movie => movie.moviegenres.includes(genreFilter));
    }

    setFilteredMovies(filtered);
  };
  return (
    <div id="Explore-Movie" className='w-full mx-auto'>

      <div className='text-5xl font-bold text-center text-yellow-500 my-10 drop-shadow-xl'>Explore Movies</div>
      <div className="container  mx-auto  my-10 py-5 w-11/12 lg:w-4/6  flex justify-around items-center flex-wrap gap-5">
        <div>

          <input className='input input-bordered border-white text-white px-8 rounded-md font-2xl font-normal'
            list="languageOptions"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            placeholder="Filter by Language"
          />
          <datalist id="languageOptions">

            <option value="Malayalam" />
            <option value="Kannada" />
            <option value="Tamil" />
            <option value="English" />
            <option value="Japanese" />
            <option value="Chinese" />
            <option value="Spanish" />
            <option value="Korean" />
            <option value="Telugu" />

          </datalist>

        </div>


        <div>
          <input
            className='input input-bordered border-white text-white px-8 rounded-md font-2xl font-normal'
            list="countryOptions"
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            placeholder="Filter by Country"
          />
          <datalist id="countryOptions">
            <option value="Australia" />
            <option value="Canada" />
            <option value="Germany" />
            <option value="France" />
            <option value="United States" />
            <option value="India" />
            <option value="Ireland" />
            <option value="Norway" />
            <option value="Kuwait" />
            <option value="United Arab Emirates" />
            <option value="Ireland" />
            <option value="Singapore" />
            <option value="United Kingdom" />
          </datalist>
        </div>

        <div>
          <input
            className='input input-bordered border-white text-white px-8 rounded-md font-2xl font-normal'
            list="genresOptions"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            placeholder="Filter by Genre"
          />
          <datalist id="genresOptions">
            <option value="Comedy" />
            <option value="Drama" />
            <option value="Romance" />
            <option value="Thriller" />
            <option value="Action" />
            <option value="Adventure" />
            <option value="Animation" />
            <option value="Fantasy" />

          </datalist>
        </div>

      </div>



      <div className="movie-list">
        <div>
          {filteredMovies.length === 0 ? (
            <div className="w-full bg-[#D3D9E7] mx-auto pt-5 pb-10 flex flex-col justify-center items-center">
              <img src="https://i.ibb.co/cgQ82L1/No-Movie.jpg" className="w-[300px] " alt="No movies available" />
              <p className='text-3xl font-bold'>Sorry, No movies available under this Criteria</p>
            </div>
          ) : (
            <div>
              <div className='w-full lg:w-11/12  mx-auto grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  gap-y-5 gap-x-6'>

                {filteredMovies.map((movie) => (
                  <div key={movie.imdbmovieid} className='mx-auto card md:card-side lg:max-h-[280px] rounded-md overflow-hidden shadow-lg bg-[#191A1D] text-white text-left'>
                    <img className="h-full" src={movie.moviemainphotos[0]} alt={movie.movietitle} />

                    <div className='px-5 py-3'>

                      <div className='font-bold text-3xl text-yellow-500 mb-3'>{movie.movietitle}</div>
                   <div>
                   <div className='text-white'> 

{movie.movielanguages.length > 0 && (
  <div>
    <strong className='text-lg'>Languages:</strong> {movie.movielanguages.slice(0, 10).join(', ')}
    {movie.movielanguages.length > 10 && " ..."}
  </div>
)}
</div>

<div>

  {movie.moviecountries.length > 0 && (
    <div>
      <strong className='text-lg'>Countries:</strong> {movie.moviecountries.slice(0, 10).join(', ')}
      {movie.moviecountries.length > 10 && " ..."}
    </div>
  )}
</div>

<div>
  {movie.moviegenres.length > 0 && (
    <div>
      <strong className='text-lg'>Genres: </strong> {movie.moviegenres.slice(0, 10).join(', ')}
      {movie.moviegenres.length > 10 && " ..."}
    </div>
  )}
</div>
                   </div>
                   <div>
                   <div>  <Link to={`/movie/${movie.imdbmovieid}`} relative="path"><button  className="btn mt-3 rounded-none border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white border-3 border-spacing-y-3 border-spacing-x-7 "> View Details</button></Link>
                   </div>
                   </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default AllMovies;