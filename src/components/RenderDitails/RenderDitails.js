import { Img, H2, DivContent } from '../../Pages/MovieDetails/MovieDetails.styled';
import defaultImage from 'components/images/No photo.png';
import {firstPeaceOfImgTrip } from "Services/Api";
const RenderDitails = (list) => {
const  { vote_average, title, genres, overview, poster_path } = list.list;

    return (
            <>
            <div>
                {poster_path  ? <Img src={`${firstPeaceOfImgTrip}${poster_path}`} alt={title} width="250" /> : <Img src={defaultImage} alt={title}  width="250"/>} 
             
            </div>
            <DivContent>
                <H2>{title}</H2>
               
                     <p>User score: {(vote_average*10).toFixed(1)} %</p>
                 <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                <p>{genres.map(genre => genre.name).join(' ')}</p> 
            </DivContent>
    </>
    );
}

export default RenderDitails;