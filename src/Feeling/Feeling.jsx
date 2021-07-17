import React from "react";

function Feeling() {
  return (
    <>
      <h1>How are you feeling today?</h1>
      <p><small>Rating: 1 for "Terrible.." and 5 for "GREAT"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button>Next</button>
    </>
  );
}

export default Feeling;
