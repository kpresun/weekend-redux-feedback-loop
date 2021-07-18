import React from "react";
import { useHistory } from "react-router";

function Comments() {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/form-review");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Do you have any last comments?</h1>
      <p><small>Share any thoughts that you have!</small></p>
      <input type="text" placeholder="Comments" />
      <button type="submit" value="submit">Next</button>
    </form>
  );
}

export default Comments;
