import React from 'react';
import { useHistory } from 'react-router';

function ReviewFeedback() {

    const history = useHistory();

    const handleSubmit = () => {
      history.push("/form-complete");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <p>This is the review page</p>
            <button type="submit" value="submit">Submit Feedback</button>
            </div>
        </form>
    )
}

export default ReviewFeedback;