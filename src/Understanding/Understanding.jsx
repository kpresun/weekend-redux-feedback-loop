import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material UI
import { Button } from "@material-ui/core";

function Understanding() {

  // hooks
  const dispatch = useDispatch();
  const selector = useSelector(store => store.understandingReducer);
  const [understanding, setUnderstanding] = useState('');
  const history = useHistory();

  //submitting understanding
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!understanding) {
      alert('Please select a number');
      return;
    }

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: understanding
    });
    history.push("/formPt3");
  };

  const backButton = (event) => {
    event.preventDefault();

    history.push("/")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>How well do you understand today's content?</h1>
      <p><small>Rating: 1 for "Not a clue.." and 5 for "Clear as day!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" value={understanding} onChange={event => setUnderstanding(event.target.value)}/>
      <Button type="submit" value="submit" variant="contained" color="primary">Next</Button>
    </form>
      <section>
        <Button onClick={backButton} variant="contained" color="secondary">Back</Button>
      </section>
      </>
  );
}

export default Understanding;
