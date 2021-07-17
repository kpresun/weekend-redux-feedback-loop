import React from "react";
import { useHistory } from "react-router-dom";

function Feeling() {

const history = useHistory();

const handleSubmit = () => {
  history.push('/formPt2')
}

  return (
    <form onSubmit={handleSubmit}>
      <h1>How are you feeling today?</h1>
      <p><small>Rating: 1 for "Terrible.." and 5 for "GREAT"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button type="submit">Next</button>
    </form>
  );
}

export default Feeling;
