import React, { Component } from "react";
import Question from "./Question";

export default class QuestionsCollection extends Component {
  render() {
    const { ids } = this.props;
    return (
      <div className="questions-list">
        {!ids.length < 1 ? (
          ids.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))
        ) : this.props.status === "answered" ? (
          <p id="no-questions">You haven't answered any questions yet</p>
        ) : (
          <p id="no-questions">You have answered all the question!</p>
        )}
      </div>
    );
  }
}
