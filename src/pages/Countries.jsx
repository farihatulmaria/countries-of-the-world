import React from 'react';
import { useSelector } from 'react-redux';
const Countries = () => {
    const state = useSelector(state=>state)
    console.log(state);
    let content;
    let countries = []
    return (
        <div className='countries-container py-10'>
             <h1 className='text-center text-4xl font-bold'>All Countries Of The World ({countries?.length})</h1> 
             <div className='mt-10 flex justify-end gap-5 px-10'>
                <button
                    className={`text-primary border border-primary px-5 py-2 rounded-full font-semibold  `}>
                    Sort
                </button>
                <button
                    className={`text-primary border border-primary px-5 py-2 rounded-full font-semibold  `}>
                    Independent
                </button>
                <button
                    className={`text-primary border border-primary px-5 py-2 rounded-full font-semibold  `}>
                    Big Area
                </button>
            </div>
            <div className="countries gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 ">
                {
                    content
                }
            </div> 
        </div>
    );
};

export default Countries;