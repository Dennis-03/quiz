import React, { Component } from "react";
import Progressbar from "./progressbar.js";
import Result from "./result.js";
// import { useHistory } from "react-router-dom";

class questions extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        {
          question:
            "While working with a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
          answer: "answer2",
        },
        {
          question:
            "working with a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
          answer: "answer3",
        },
        {
          question:
            "ith a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
          answer: "answer4",
        },
        {
          question:
            "need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
          answer: "answer1",
        },
      ],
      qno: 0,
      noofquestions: 4,
      answers: [],
      score: 0,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    let {
      answers,
      score,
      selectedOption,
      qno,
      results,
      noofquestions,
    } = this.state;
    let value = answers;
    value.push(selectedOption);
    if (selectedOption === results[qno].answer) {
      score += 10;
      console.log(score);
    }
    event.preventDefault();
    console.log(selectedOption);
    this.setState((prevstate) => ({
      qno: prevstate.qno + 1,
      answers: value,
      selectedOption: "",
      score: score,
    }));

    if (qno === noofquestions) {
      console.log(answers);
    }
  }
  render() {
    const { results, qno, selectedOption, noofquestions } = this.state;
    if (qno !== noofquestions) {
      return (
        <div>
          <Progressbar qno={qno} noofquestions={noofquestions} />
          <div className="container">
            <form onSubmit={this.formSubmit}>
              <div className="card question-container">
                <p>
                  <strong>QUESTION:</strong>
                  {results[qno].question}
                </p>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={results[qno].option1}
                      checked={selectedOption === results[qno].option1}
                      onChange={this.onValueChange}
                      required
                    />
                    {results[qno].option1}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={results[qno].option2}
                      checked={selectedOption === results[qno].option2}
                      onChange={this.onValueChange}
                    />
                    {results[qno].option2}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={results[qno].option3}
                      checked={selectedOption === results[qno].option3}
                      onChange={this.onValueChange}
                    />
                    {results[qno].option3}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value={results[qno].option4}
                      checked={selectedOption === results[qno].option4}
                      onChange={this.onValueChange}
                    />
                    {results[qno].option4}
                  </label>
                </div>

                {/* <div>Selected option is : {selectedOption}</div> */}
              </div>
              <button className="btn btn-success" type="submit">
                Next
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return <Result score={this.state.score} maxscore="100" />;
    }
  }
}
export default questions;
