import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <form onSubmit={handleSubmit}>
      <h1>Do you have any last comments?</h1>
      <p><small>Share any thoughts that you have!</small></p>
      <input type="text" placeholder="Comments" value={comments} onChange={event => setComments(event.target.value)}/>
      <button type="submit" value="submit">Next</button>
    </form>
  );
}

export default Comments;
