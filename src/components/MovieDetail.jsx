import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MovieDetail = () => {
    const [detail, setdetail] = useState({});

    const { id } = useParams();
    console.log("ID:", id);
  
    const details = useLoaderData();
    console.log("Details:", details);
  
    useEffect(() => {
  
      const finddetail = details?.find(detail => detail.imdbmovieid === id);
  
      setdetail(finddetail);
    }, [id,detail]);

    const { imdbmovieid, movietitle, moviemainphotos,moviecountries, movielanguages, moviegenres} = detail || {};
    console.log(detail);

   
    return (
        <div className=' mt-0'>
      
        <div>
        <div className='mx-auto mt-5 w-4/6 flex flex-col lg:flex-row justify-center items-center'>
           <div className='w-2/3  flex flex-col justify-around  ' > 
           
           <img className=' h-full rounded-md' src={moviemainphotos} alt="" />
           
           </div> 
           
           {/* <h1 className='my-auto font-bold mt-3 text-left text-black rounded-md text-xl'> Price: {price}</h1> */}
           <div className="w-2/3 lg:ml-5 text-left">

           <h1 className='text-[#0B0B0B], text-4xl font-bold my-5 text-yellow-500'>{movietitle}</h1>
           
           <p className='text-[#0B0B0B], text-md text-justify my-5'> <strong>Languages: </strong>{movielanguages?.join(', ')}</p>
           <p className='text-[#0B0B0B], text-md text-justify my-5'><strong>Countries: </strong>{moviecountries?.join(', ')}</p>
           <p className='text-[#0B0B0B], text-md text-justify my-5'><strong>Genres: </strong>{moviegenres?.join(', ')}</p>

           </div>


           
           
        </div>
    </div>
    </div>
    );
};

export default MovieDetail;