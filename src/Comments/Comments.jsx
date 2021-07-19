import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material UI
import { Button } from "@material-ui/core";

function Comments() {

  const dispatch = useDispatch();
  const selector = useSelector(store => store.commentsReducer);
  const [comments, setComments] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_COMMENT",
      payload: comments
    });
    history.push("/form-review");
  };

  const backButton = (event) => {
    event.preventDefault();

    history.push("/formPt3")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Do you have any last comments?</h1>
      <p><small>Share any thoughts that you have!</small></p>
      <input type="text" placeholder="Comments" value={comments} onChange={event => setComments(event.target.value)}/>
      <Button type="submit" value="submit" variant="contained" color="primary">Next</Button>
    </form>
    <section>
      <Button onClick={backButton} variant="contained" color="secondary">Back</Button>
    </section>
    </>
  );
}

export default Comments;
