import React, { Component } from "react";

export default class Contender extends Component {
  render() {
    const { contender } = this.props;
    const { questions, answers, name, points, avatarURL } = contender;
    return (
      <div className="contender">
        <div className="ribbon">
          <img alt="trophy" />
        </div>
        <div className="contender-content">
          <div className="contender-image">
            <img alt="avatar" src={avatarURL} />
          </div>
          <div className="content-text">
            <p className="contender-name">{name}</p>
            <div>
              <p>Answers: {Object.keys(answers).length}</p>
            </div>
            <div>
              <span>Questions: {questions.length}</span>
            </div>
          </div>
          <div className="total-points">
            <div className="total-points-header">points</div>
            <div className="points-circle">{points}</div>
          </div>
        </div>
      </div>
    );
  }
}
