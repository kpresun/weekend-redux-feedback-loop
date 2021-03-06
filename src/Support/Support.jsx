import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


//material UI
import { Button } from "@material-ui/core";

function Support() {

  const dispatch = useDispatch();
  const selector = useSelector(store => store.supportReducer);
  const [support, setSupport] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!support) {
      alert('Please select a number');
      return;
    }

    dispatch({
      type: "SET_SUPPORT",
      payload: support
    });
    history.push("/formPt4");
  };

  const backButton = (event) => {
    event.preventDefault();

    history.push("/formPt2")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>How well do you feel supported?</h1>
      <p><small>Rating: 1 for "No help at all.." and 5 for "A friend I can always count on!"</small></p>
      <input type="number" id="quantity" name="feelingRating" min="1" max="5" value={support} onChange={event => setSupport(event.target.value)}/>
      <Button type="submit" value="submit" variant="contained" color="primary">Next</Button>
    </form>
    <section>
      <Button onClick={backButton} variant="contained" color="secondary">Back</Button>
    </section>
    </>
  );
}

export default Support;
