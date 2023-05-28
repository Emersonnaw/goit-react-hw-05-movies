import { useState, useEffect } from 'react';
import Loader from "components/Loader/Loader";
import { FetchPopularMovies } from 'components/Services/Api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
    const [trandingMovieList, setTrandingMovieList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        FecthPopularContent();
    }, []);
    
    const FecthPopularContent = async () => {
        try {
            const data = await FetchPopularMovies();
            setTrandingMovieList(data.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {trandingMovieList && <MovieList List={trandingMovieList}  />}
        </>
    );
};

export default Home;