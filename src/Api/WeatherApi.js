import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnCity = (city) => {
    return apiClient
        .get(
            ` `
        )
        .then((res) => res.data);
};
 
export {getWeatherBasedOnCity};