import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { FetchByReviews } from "components/Services/Api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const [reviewList, setReviewList] = useState([]);
    const { movieId } = useParams();
   
    useEffect(() => {
        fetchReviews(movieId)
    },[movieId] );
   
    const fetchReviews = async (movieId) => {
        try {
            const data = await FetchByReviews(movieId);
            setReviewList(data.data.results);
        } catch (error) {
            toast.error(` Something were wrong -"${error}"`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
     }
 }

    return (
        <>
            {reviewList.length !== 0 ? reviewList.map(({ author, id, content }) => (
                <div key={id}>
                     <h5>Author: {author}</h5>
                <p>{content}</p>
               </div>
                )) : <h5>We don't have any reviews for this movie.</h5>
               }
        </>
    );
}

export default Reviews;
