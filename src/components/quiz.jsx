import React, { Component } from "react";
import Question from "./question";

class Quiz extends Component {
  state = {
    questions: [
      {
        question: "What's my name?",
        options: { a: "John", b: "Peter", c: "Tom" },
        answer: "Peter"
      },
      {
        question: "What's my age?",
        options: { a: "5", b: "22", c: "38" },
        answer: "38"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Quiz</h1>
        {this.state.questions.map(question => (
          <Question data={question} />
        ))}
      </div>
    );
  }
}

export default Quiz;
