import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = 'db1df0c9565c427084a8440ce91f6639';
const TRENDING_MOVIE = '/trending/movie/';
const SEARCH_BY_KEYWORD = '/search/movie';
const languages = '&language=en';
 export const firstPeaceOfImgTrip = 'https://image.tmdb.org/t/p/w500/';

//example https://api.themoviedb.org/3/trending/movie/day?api_key=db1df0c9565c427084a8440ce91f6639
export async function FetchPopularMovies() {
    const time_window = 'day'; // or week
        return await axios.get(`${BASE_URL}${TRENDING_MOVIE}${time_window}?api_key=${API_KEY}`); 
};

//example 'https://api.themoviedb.org/3/search/movie?query=car&include_adult=false&language=${}&page=1'
export async function FetchByKeyword(query) { 
    const page = '&page=1';
        return await axios.get(`${BASE_URL}${SEARCH_BY_KEYWORD}?api_key=${API_KEY}&query=${query}&include_adult=false${languages}${page}`)  
} 

//example 'https://api.themoviedb.org/3/movie/100287?language=en-US&api_key=db1df0c9565c427084a8440ce91f6639'
export async function FetchById(id) {
        return await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}${languages}`);  
}
    
//'https://api.themoviedb.org/3/movie/569094/credits?language=en-US'

export async function FetchByCast(id) {
        return await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}${languages}`); 
}

//example https://api.themoviedb.org/3/movie/1765227/reviews?language=en-US&page=1
export async function FetchByReviews(id) {
        return await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}${languages}`); 
}


