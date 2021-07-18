import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Header from "../Header/Header";
import Feeling from "../../Feeling/Feeling";
import Understanding from "../../Understanding/Understanding";
import Support from "../../Support/Support";
import Comments from "../../Comments/Comments";
import ReviewFeedback from "../../ReviewFeedback/ReviewFeedback";
import ThankYouPage from "../../ThankYouPage/ThankYouPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact component={Feeling} />
        <Route path="/formPt2" exact component={Understanding} />
        <Route path="/formPt3" exact component={Support} />
        <Route path="/formPt4" exact component={Comments} />
        <Route path="/form-review" exact component={ReviewFeedback} />
        <Route path="/form-complete" exact component={ThankYouPage} />
      </Router>
    </div>
  );
}

export default App;
