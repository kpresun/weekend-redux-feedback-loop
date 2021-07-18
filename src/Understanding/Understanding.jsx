import React from "react";
import { useHistory } from "react-router";

function Understanding() {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/formPt3");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>How well do you understand today's content?</h1>
      <p><small>Rating: 1 for "Not a clue.." and 5 for "Clear as day!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" />
      <button type="submit" value="submit">Next</button>
    </form>
  );
}

export default Understanding;
