import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Feeling() {

  const dispatch = useDispatch();
  const selector = useSelector(store => store.feelingReducer);
  const [feeling, setFeeling] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_FEELING",
      payload: feeling
    });
    history.push("/formPt2");
  };

    return (
      <form onSubmit={handleSubmit}>
        <h1>How are you feeling today?</h1>
        <p><small>Rating: 1 for "Terrible.." and 5 for "GREAT"</small></p>
        <input type="number" id="quantity" value={feeling} name="feelingRating" min="1" max="5" />
        <button type="submit">Next</button>
      </form>
    );
}

export default Feeling;
