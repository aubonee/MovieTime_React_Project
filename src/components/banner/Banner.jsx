import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/g31cpn9/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-[550px]">
      <h1 className="mb-5 text-5xl font-bold">MovieTime</h1>
      <p className="mb-5">Your ultimate destination for discovering and enjoying the latest blockbuster movies, timeless classics, and hidden gems. Explore, indulge, and let the movie magic begin!</p>
     <a href="#Explore-Movie"><button className="btn bg-yellow-600 hover:bg-yellow-500 rounded-none border-none px-8 text-white">Explore</button></a> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;