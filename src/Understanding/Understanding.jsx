import React from "react";

function Understanding() {
  return (
    <>
      <h1>How well do you understand today's content?</h1>
      <p><small>Rating: 1 for "Not a clue.." and 5 for "Clear as day!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button>Next</button>
    </>
  );
}

export default Understanding;
