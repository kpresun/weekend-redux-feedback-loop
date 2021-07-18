import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

function ReviewFeedback() {

    const feelingRating = useSelector(store => store.feelingReducer);
    const understandingRating = useSelector(store => store.understandingReducer);
    const supportRating = useSelector(store => store.supportReducer);
    const commentsInput = useSelector(store => store.commentsReducer);
    const history = useHistory();

    const handleSubmit = () => {
      history.push("/form-complete");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Review your Feedback</h1>
                <p>Feeling: {feelingRating}</p>
                <p>Understanding: {understandingRating}</p>
                <p>Support: {supportRating}</p>
                <p>Comments: {commentsInput}</p>
            <button type="submit" value="submit">Submit Feedback</button>
            </div>
        </form>
    )
}

export default ReviewFeedback;