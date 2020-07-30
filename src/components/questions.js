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
        },
        {
          question:
            "working with a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
        },
        {
          question:
            "ith a web app, you might need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
        },
        {
          question:
            "need to use various form controls such as text boxes, checkboxes, dropdowns, file uploads, or radio buttons in order to use HTML elements or third-party libraries for React, such as material-ui.",
          option1: "answer1",
          option2: "answer2",
          option3: "answer3",
          option4: "answer4",
        },
      ],
      qno: 0,
      noofquestions: 3,
      answers: [],
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
    let value = this.state.answers;
    value.push(this.state.selectedOption);
    event.preventDefault();
    console.log(this.state.selectedOption);
    this.setState((prevstate) => ({
      qno: prevstate.qno + 1,
      answers: value,
      selectedOption: "",
    }));

    if (this.state.qno === this.state.noofquestions) {
      console.log(this.state.answers);
      let path = `result`;
    }
  }
  render() {
    const { results, qno, selectedOption } = this.state;
    if (qno !== 4) {
      return (
        <div>
          <Progressbar qno={qno} />
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
      return <Result score="50" maxscore="100" />;
    }
  }
}
export default questions;
