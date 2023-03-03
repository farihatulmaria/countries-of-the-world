import axios from "../../utils/axios.config";

export const fetchAll = async () =>{
    const data = await axios.get('/all');
    return data?.data?.data
}