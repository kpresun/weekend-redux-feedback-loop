import React from "react";

function Comments() {
  return (
    <form>
      <h1>Do you have any last comments?</h1>
      <p><small>Share any thoughts that you have!</small></p>
      <input type="text" placeholder="Comments" />
      <button>Next</button>
    </form>
  );
}

export default Comments;
