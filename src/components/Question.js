import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    const { user, question } = this.props;
    return (
      <div className="question">
        <div className="question-header">
          <div>Asked by: {user.name}</div>
        </div>
        <div className="item-content poll-content">
          <div className="content-image">
            <img alt="avatar" src={user.avatarURL} />
          </div>
          <div className="content-separator"></div>
          <div className="content-text">
            <p className="would-you-rather">Would You Rather</p>
            <label>{question.optionOne.text}</label>
            <button className="vote-btn">View Question</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
  const question = questions[id];
  const user = users[question.author];
  console.log(user)
  return {
    user,
    question,
  };
};
export default connect(mapStateToProps)(Question);
