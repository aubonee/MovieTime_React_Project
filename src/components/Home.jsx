import React from 'react';
import Banner from './banner/Banner';
import AllMovies from './AllMovies';

const Home = () => {
    return (
        <div className='bg-[#000000]'>
          <Banner></Banner>
          <AllMovies></AllMovies>
        </div>
    );
};

export default Home;