// useGetAllCountries

import { useEffect, useState } from "react";

const useGetAllCountries = async () =>{
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])
    
    return [countries]
}

export default useGetAllCountries