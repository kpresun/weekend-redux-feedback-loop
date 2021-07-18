const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// This will post to database entire feedback
router.post("/", (req, res) => {
  console.log("Inside router POST, current data,", req.body);
  const feedback = req.body;
  let queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("unable to post feedback to database,", error);
      res.sendStatus(500);
    });
});

module.exports = router;
