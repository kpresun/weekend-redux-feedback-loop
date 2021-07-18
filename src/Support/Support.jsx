import React from "react";
import { useHistory } from "react-router";

function Support() {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/formPt4");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>How well do you feel supported?</h1>
      <p><small>Rating: 1 for "No help at all.." and 5 for "A friend I can always count on!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button type="submit" value="submit">Next</button>
    </form>
  );
}

export default Support;
