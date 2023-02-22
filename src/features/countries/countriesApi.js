import axios from "../../utils/axios.config";

export const fetchAllCountries = async ()=>{
    const data = await axios.get('/all')
    return data
}