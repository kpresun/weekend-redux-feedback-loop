import React from 'react';


function Feeling() {

    return (
        <h1>How are you feeling today?</h1>
        <input type='number' id='quantity' name='feelingRating' min='1' max='5'>Feeling today</input>
        <button>Next</button>
    )
}

export default Feeling;