import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    const { data } = this.props;
    const { question } = data;
    const { options } = data;
    const { answer } = data;
    return (
      <div>
        <h2>Question {question}</h2>
        <ul>
          <li>{options.a}</li>
          <li>{options.b}</li>
          <li>{options.c}</li>
        </ul>
        <b>Correct answer: </b>
        {answer}
      </div>
    );
  }
}

export default Question;
