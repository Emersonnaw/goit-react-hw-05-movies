import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { firstPeaceOfImgTrip } from 'Services/Api';
import {Ul, Img, LinkStile} from './MovieList.styled'
import defaultImage from 'components/images/No photo.png';
const MovieList = ({ List }) => {

    const location = useLocation();
    
    return (
        <div>
            <Ul>
                {List.map(({ id, title,poster_path }) => (
                    <li key={id}>
                        <LinkStile to={`/movies/${id}`} state={{from:location}} >
                            {poster_path  ? <Img src={`${firstPeaceOfImgTrip}${poster_path}`} alt='' /> : <Img src={defaultImage} alt='' />}
                            <span>{title}</span>
                        </LinkStile>
                    </li>
                ))}
            </Ul>
        </div>
    )
};
export default MovieList;

MovieList.propTypes = {
    List: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string
    }))
};
