import PropTypes from 'prop-types';
import { firstPeaceOfImgTrip } from 'components/Services/Api';
import {Ul, Img, LinkStile,DivWrapper, Span} from './MovieList.styled'

const MovieList = ({ List, location }) => {

    return (
        <div>
            <Ul>
                {List.map(({ id, title,poster_path }) => (
                    <li key={id}>
                        <LinkStile to={`/movies/${id}`} state={{from:location}} >
                            {poster_path ? <Img src={`${firstPeaceOfImgTrip}${poster_path}`} alt='' /> : <DivWrapper><Span>{title }</Span></DivWrapper>}
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
