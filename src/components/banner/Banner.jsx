import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/g31cpn9/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">MovieTime</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-yellow-600 hover:bg-yellow-500 rounded-none border-none px-5 text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;