import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

//material UI
import { Button } from "@material-ui/core";

function ReviewFeedback() {
  //importing in all reducer to access their state data
  const feelingRating = useSelector((store) => store.feelingReducer);
  const understandingRating = useSelector(
    (store) => store.understandingReducer
  );
  const supportRating = useSelector((store) => store.supportReducer);
  const commentsInput = useSelector((store) => store.commentsReducer);
  const history = useHistory();

  // posting to database
  const handleSubmit = (event) => {
    console.log("Inside ReviewFeedback handleSubmit");
    event.preventDefault();

    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: feelingRating,
        understanding: understandingRating,
        support: supportRating,
        comments: commentsInput,
      },
    })
      .then((response) => {
        console.log(response);
        history.push("/form-complete");
      })
      .catch((error) => {
        console.log("unable to post feedback,", error);
        alert(
          "Unable to submit your feedback due to missing information, please go back and try again."
        );
      });
  };

  const backButton = (event) => {
    event.preventDefault();

    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Review your Feedback</h1>
          <p>Feeling: {feelingRating}</p>
          <p>Understanding: {understandingRating}</p>
          <p>Support: {supportRating}</p>
          <p>Comments: {commentsInput}</p>
          <Button type="submit" value="submit" variant="contained" color="primary">
            Submit Feedback
          </Button>
        </div>
      </form>
      <section>
        <Button onClick={backButton} variant="contained" color="secondary">Start over</Button>
      </section>
    </>
  );
}

export default ReviewFeedback;
