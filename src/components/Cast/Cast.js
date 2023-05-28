import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { FetchByCast,firstPeaceOfImgTrip } from "components/Services/Api";
import {Img, Ul, DivWrapper, Span} from './Cast.styled'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
    const [actorsProps, setActorsProps] = useState([]);
    const { movieId } = useParams();
   
    useEffect(() => {
        fetchCast(movieId)
    },[movieId] );
   
    const fetchCast = async (movieId) => {
        try {
            const data = await FetchByCast(movieId);
            setActorsProps(data.data.cast);
        } catch (error) {
            toast.error(` Is there something Wrong - "${error}"`, {
        position: 'top-right',
        autoClose: 4000,
        theme: 'colored',
      });
     }
 }
  
    return (
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
    );
}

export default Cast;
