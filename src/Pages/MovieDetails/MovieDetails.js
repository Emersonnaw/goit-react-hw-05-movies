import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { FetchById,firstPeaceOfImgTrip } from "components/Services/Api";
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { useEffect, useState, useRef, } from "react";
import { LinkGoBack,Img, DivContainer, H2,DivContent} from './MovieDetails.styled';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {

    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? `/`);
    const [genres, setGenres] = useState([]);
    const [posterImage, setPosterImage] = useState('');
    const [popularity, setPopularity] = useState(0);
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchDetails(movieId)
    },[movieId] );
   
    const fetchDetails = async (movieId) => {
        try {
            setLoader(true);
            const data = await FetchById(movieId);
            const {genres,vote_average,poster_path,title,overview} = data.data;
            setGenres(genres.map(genre => genre.name).join(' '));  
            setPosterImage(`${firstPeaceOfImgTrip}${poster_path}`);
            setPopularity((vote_average*10).toFixed(1));
            setTitle(title);
            setOverview(overview);
            setLoader(false);
        } catch (error) {
            setLoader(false);
            toast.error(`We have a problem - "${error}" `, {
        position: 'top-right',
        autoClose: 4000,
        theme: 'colored',
      });
     }
 }

    
    return (
        <>
            <LinkGoBack  to={backLinkLocationRef.current}>&#129048; Go back</LinkGoBack>
            <DivContainer>
                {loader && <Loader />}
            <div>
          <Img src={posterImage} alt={title} width="250px" /> 
            </div>
            <DivContent>
                <H2>{title}</H2>
                    <p>User score: {popularity} %</p>
                <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                    <p>{ genres}</p>
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
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
           
        </>
    );
}

export default MovieDetails;
