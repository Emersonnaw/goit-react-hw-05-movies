import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { FetchById } from "Services/Api";
import Loader from 'components/Loader/Loader';
import RenderDitails from 'components/RenderDitails/RenderDitails'
import { useEffect, useState, useRef, } from "react";
import { LinkGoBack, DivContainer} from './MovieDetails.styled';


const MovieDetails = () => {

    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? `/`);
    const [ditailsList, setDitailsList] = useState(null);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    useEffect(() => {

        fetchDetails(movieId);
    },[movieId] );
   
    async function fetchDetails(movieId){
        try {
            setError(null);
            setLoader(true);
            const data = await FetchById(movieId);
            setDitailsList(data.data)
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
                        {ditailsList && <RenderDitails list={ditailsList} />}
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
