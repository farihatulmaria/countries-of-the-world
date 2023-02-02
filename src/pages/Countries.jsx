import React, { useEffect, useState } from 'react';
import Country from '../Components/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const getAllCountries = async()=>{
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data)
    }
    useEffect(() => {
        getAllCountries()
    }, [])
    
    return (
        <div className='countries-container py-10'>
            <h1 className='text-center text-4xl font-bold'>All Countries Of The World ({countries?.length})</h1>
            
            <div className="countries gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 ">
                {
                    countries?.map((country,index)=><Country key={index} country={country}/>)
                }
            </div>
        </div>
    );
};

export default Countries;