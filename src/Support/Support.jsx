import React from "react";

function Support() {
  return (
    <>
      <h1>How well do you feel supported?</h1>
      <p><small>Rating: 1 for "No help at all.." and 5 for "A friend I can always count on!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button>Next</button>
    </>
  );
}

export default Support;
