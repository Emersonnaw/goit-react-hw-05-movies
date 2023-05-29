import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { FetchByCast,firstPeaceOfImgTrip } from "Services/Api";
import {Img, Ul, DivWrapper, Span} from './Cast.styled'


const Cast = () => {
    const [actorsProps, setActorsProps] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchCast(movieId)
    },[movieId] );
   
    const fetchCast = async (movieId) => {
        try {
            setError(null);
            const data = await FetchByCast(movieId);
            setActorsProps(data.data.cast);
        } catch (error) {
            setError(error);
     }
 }
  
    return (
        <>
            {error ? <p>{error} </p> :
                <>
                <Ul>
                {actorsProps.length !== 0 ? actorsProps.map(({id, name, character, profile_path }) => (
                    <li key={id}>
                    {profile_path ? <Img src={`${firstPeaceOfImgTrip}${profile_path}`} alt={name} /> : <DivWrapper><Span>{name}</Span></DivWrapper>}
                        <h5>{name}</h5>
                        <p>Character: {character}</p>
                    </li>
                )) : <h5>We don't have any cast.</h5>}
                    </Ul>
                </>
            }
        </>
    );
}

export default Cast;
