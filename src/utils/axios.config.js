import axios from "axios";

let URL ;
switch(process.env.REACT_APP_ENVIRONMENT){
    case "DEVELOPMENT":
        URL = "https://restcountries.com/v3.1/";
        break;
    case "PRODUCTION":
        URL = "https://domain.com";
        break;
    default:
        URL = "https://restcountries.com/v3.1/";
}

const instance =axios.create({
    baseURL:URL
});

export default instance