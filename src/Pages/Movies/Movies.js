import { useState, useEffect } from 'react';
import {useSearchParams } from "react-router-dom";
import { FetchByKeyword } from 'Services/Api';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import {Div} from './Movies.styled'
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? '');
    const [seacrchBySet, setSeacrchBySet] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        SearchByWord(searchQuery);
    }, [searchQuery]);
    

    const SearchByWord = async (query) => {
        try {
            setError(null);
            setLoader(true);
            const newQuery = await FetchByKeyword(query);
            if (newQuery.data.results.length === 0) {
                setLoader(false);
                toast.error(`"${newQuery.data.results}" no match for this word `, {
        position: 'top-right',
        autoClose: 5000,
        theme: 'colored',
                });
                setSeacrchBySet([]);
                return;
            }
            setLoader(false);
            setSeacrchBySet(newQuery.data.results);
        } catch (error) {
             setLoader(false);
            setError(error);
        }

    }

    const onFormData = (value) => {
        setSearchParams({q: value});
        setSearchQuery(value);   
    };

    return (
        <>
            <Div>
                <SearchForm onFormData={onFormData} />
            </Div>
            {loader && <Loader />}
            {error && <h2>{ error}</h2>}
            {seacrchBySet.length > 0 && <MovieList List={seacrchBySet} />}   
        </>
    );
}


export default Movies;