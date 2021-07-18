import React from 'react';
import { useHistory } from 'react-router';

function ThankYouPage() {

    const history = useHistory();

    const handleSubmit = () => {
      history.push("/");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <p>Thank you page</p>
                <button type="submit">Leave New Feedback</button>
            </div>
        </form>
    )
}

export default ThankYouPage;