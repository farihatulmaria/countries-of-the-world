import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../Components/Country';
import { useGetAllCountriesQuery } from '../feature/api/apiSlice';
import { toogleBySort } from '../feature/filter/filterSlice';

const Countries = () => {
    // const [countries, setCountries] = useState([]);
    // const getAllCountries = async()=>{
    //     const res = await fetch('https://restcountries.com/v3.1/all');
    //     const data = await res.json();
    //     setCountries(data)
    // }
    // useEffect(() => {
    //     getAllCountries()
    // }, [])

    const state = useSelector(state=>state);
    console.log(state);
    const dispatch = useDispatch();

    const {data,isLoading,isError,error} = useGetAllCountriesQuery(null,{refetchOnMountOrArgChange:true});

    const countries = data;
    let content;

    if(isLoading && countries?.length < 0 ){
        content = <p className='text-3xl font-bold'> LOADING ..............</p>
    }
    if(isError){
        console.log(error);
        content = <p className='text-3xl font-bold'>Something went wrong </p>
    }
    if(!isLoading && countries?.length > 0 ){
        content = <>
            {
                countries?.map((country,index)=><Country key={index} country={country}/>)
            }
        </>
    }
    return (
        <div className='countries-container py-10'>
            <h1 className='text-center text-4xl font-bold'>All Countries Of The World ({countries?.length})</h1>
            <div className='mt-10 flex justify-end gap-5 px-10'>
                <button
                    className={`text-primary border border-primary px-5 py-2 rounded-full font-semibold  `}
                    onClick={()=>dispatch(toogleBySort())}>
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