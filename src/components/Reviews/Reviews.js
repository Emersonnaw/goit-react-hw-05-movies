import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { FetchByReviews } from "Services/Api";


const Reviews = () => {
    const [reviewList, setReviewList] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchReviews(movieId)
    },[movieId] );
   
    const fetchReviews = async (movieId) => {
        try {
            setError(null);
            const data = await FetchByReviews(movieId);
            setReviewList(data.data.results);
        } catch (error) {
            setError(error);        
        }
 }

    return (
        <>
            {error ? <p>{error}</p> :
            <>
            {reviewList.length !== 0 ? reviewList.map(({ author, id, content }) => (
                <div key={id}>
                     <h5>Author: {author}</h5>
                <p>{content}</p>
               </div>
                )) : <h5>We don't have any reviews for this movie.</h5>
               }
             </>  
               }
        </>
    );
}

export default Reviews;
