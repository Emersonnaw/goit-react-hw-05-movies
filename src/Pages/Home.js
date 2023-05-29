import { useState, useEffect } from 'react';
import Loader from "components/Loader/Loader";
import { FetchPopularMovies } from 'Services/Api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
    const [trandingMovieList, setTrandingMovieList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        FecthPopularContent();
    }, []);
    
    const FecthPopularContent = async () => {
        try {
            setError(null);
            const data = await FetchPopularMovies();
            setTrandingMovieList(data.data.results);
            setLoading(false);
        } catch (error) {
             setLoading(false);
            setError(error);
        };
    };

    return (
        <>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {error && <h2>{ error}</h2>}
            {trandingMovieList.length > 0 && <MovieList List={trandingMovieList}  />}
        </>
    );
};

export default Home;