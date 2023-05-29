import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { FetchById,firstPeaceOfImgTrip } from "Services/Api";
import Loader from 'components/Loader/Loader';

import { useEffect, useState, useRef, } from "react";
import { LinkGoBack,Img, DivContainer, H2,DivContent} from './MovieDetails.styled';

import defaultImage from 'components/images/No photo.png';
const MovieDetails = () => {

    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? `/`);

    // const [ditailsList, setDitailsList] = useState('');
    
    const [genres, setGenres] = useState([]);
    const [posterImage, setPosterImage] = useState('');
    const [popularity, setPopularity] = useState(0);
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchDetails(movieId)
    },[movieId] );
   
    const fetchDetails = async (movieId) => {
        try {
            setError(null);
            setLoader(true);
            const data = await FetchById(movieId);

            // setDitailsList(data.data);
           
            const {genres,vote_average,poster_path,title,overview} = data.data;
            setGenres(genres);  
            setPosterImage(poster_path);
            setPopularity(vote_average);
            setTitle(title);
            setOverview(overview);
            
            setLoader(false);
        } catch (error) {
            setLoader(false);
            setError(error)
     }
 }

   
    return (
        <>
            {error ? <p>{error}</p> :
                <>
                    <LinkGoBack to={backLinkLocationRef.current}>&#129048; Go back</LinkGoBack>
            <DivContainer>
                {loader && <Loader />}
            <div>
            {posterImage  ? <Img src={`${firstPeaceOfImgTrip}${posterImage}`} alt={title} width="250" /> : <Img src={defaultImage} alt={title}  width="250"/>} 
            </div>
            <DivContent>
                <H2>{title}</H2>
                    <p>User score: {(popularity*10).toFixed(1)} %</p>
                <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                    <p>{genres.map(genre => genre.name).join(' ')}</p>
                </DivContent>
                
        </DivContainer>    
            <p>Addition information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>  
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                    
                </li>
                </ul>
            </>
            }
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
           
        </>
    );
}

export default MovieDetails;
