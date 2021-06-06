import React, { Component } from "react";

export default class QuestionsCollection extends Component {
  render() {
    return (
      <ul className="questions-list">
        {QuestionsCollection.length < 1 ? (
          this.props.ids.map((id) => (
            <li key={id}>{id}</li>
          ))
        ) : this.props.status === "answered" ? (
          <p id="no-questions">You haven't answered any questions yet</p>
        ) : (
          <p id="no-questions">You have answered all the question!</p>
        )}
      </ul>
    );
  }
}
