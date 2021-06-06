import React, { Component } from "react";

export default class DashboardNavigation extends Component {
  render() {
    return (
      <div className="poll-nav">
        <a href='#'>
          <img
            alt="unanswered tab"
            src="https://www.freepnglogos.com/uploads/question-mark-png/question-mark-png-letter-profro-questions-glad-you-didn-7.png"
            height="23px"
          />
          <p>Unanswered Questions</p>
        </a>
        <a href='#'>
          <img
            alt="answered tab"
            src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-right-answer-icon-image_1344787.jpg"
            height="23px"
          />
          <p>Answered Questions</p>
        </a>
      </div>
    );
  }
}
