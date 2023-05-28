import { useState, useEffect } from 'react';
import { useLocation,useSearchParams } from "react-router-dom";
import { FetchByKeyword } from 'components/Services/Api';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import {Div} from './Movies.styled'
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? '');
    const [seacrchBySet, setSeacrchBySet] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        SearchByWord(searchQuery);
    }, [searchQuery]);
    

    const SearchByWord = async (query) => {
        try {
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
            toast.error(`We have a problem."${error}" `, {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
                });
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
            {seacrchBySet && <MovieList List={seacrchBySet} location={location}  />}   
        </>
    );
}


export default Movies;