import React from 'react';
import { useHistory } from 'react-router';

function ThankYouPage() {

    const history = useHistory();

    const handleClick = () => {
      history.push("/");
    }

    return(
            <div onClick={handleClick}>
                <p>Thank you page</p>
                <button type="button">Leave New Feedback</button>
            </div>
    )
}

export default ThankYouPage;