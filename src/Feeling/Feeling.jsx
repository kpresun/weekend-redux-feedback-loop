import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material UI
import { Button } from "@material-ui/core";

function Feeling() {

  // declaring all my hooks
  const dispatch = useDispatch();
  const selector = useSelector(store => store.feelingReducer);
  const [feeling, setFeeling] = useState('');
  const history = useHistory();

//handling the submission of the feeling rating
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!feeling) {
      alert('Please select a number');
      return;
    }

    dispatch({
      type: "SET_FEELING",
      payload: feeling
    });
    // pushing to next page
    history.push("/formPt2");
  };

  //return data to DOM
    return (
      <form onSubmit={handleSubmit}>
        <h1>How are you feeling today?</h1>
        <p><small>Rating: 1 for "Terrible.." and 5 for "GREAT"</small></p>
        <input type="number" id="quantity" name="feelingRating" min="1" max="5" value={feeling} onChange={event => setFeeling(event.target.value)}/>
        <Button type="submit" variant="contained" color="primary">Next</Button>
      </form>
    );
}

export default Feeling;
