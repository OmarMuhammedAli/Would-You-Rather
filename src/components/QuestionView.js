import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { withRouter, Redirect } from "react-router-dom";

class QuestionView extends Component {
  constructor() {
    super();
    this.state = {
      choice: "optionOne",
    };
  }
  getVotePercentage = (optionCount, votesCount) =>
    Math.round((optionCount / votesCount) * 100);
  handleBackButton = (e) => {
    e.preventDefault();
    this.props.history.push("/questions");
  };
  handleChoiceChange = (e) => {
    const choice = e.target.value;
    this.setState(() => ({
      choice,
    }));
  };
  handleChoiceSubmit = (e) => {
    e.preventDefault();
    const { dispatch, question } = this.props;
    const { choice } = this.state;
    dispatch(handleAddAnswer(question.id, choice));

  };
  renderQuestionCardHeader = () => (
    <div className="question-header">
      <button onClick={this.handleBackButton}>
        <img alt="back button" src="/images/arrow-back.svg" />
      </button>
      <div>Asked by: {this.props.user.name}</div>
    </div>
  );
  renderOptionChoice = () => (
    <form onSubmit={this.handleChoiceSubmit}>
      <input
        type="radio"
        name="option"
        value="optionOne"
        id="optionOne"
        onChange={this.handleChoiceChange}
        defaultChecked
      />
      <label htmlFor="optionOne">{this.props.question.optionOne.text}</label>
      <input
        type="radio"
        name="option"
        value="optionTwo"
        id="optionTwo"
        onChange={this.handleChoiceChange}
      />
      <label htmlFor="optionTwo">{this.props.question.optionTwo.text}</label>
      
      <button value="Confirm Choice" type="submit" className="vote-btn">
        Vote!
      </button>
    </form>
  );
  renderShowVoteResults = (option, votesCount) => (
    <div
      className={`answer-section${
        !option.votes.includes(this.props.authedUser) ? "" : " chosen-answer"
      }`}
    >
      <label>{option.text}</label>
      <div
        className="progress"
        data-label={
          this.getVotePercentage(option.votes.length, votesCount) + "%"
        }
      >
        <span
          className="value"
          style={{
            width: `${this.getVotePercentage(
              option.votes.length,
              votesCount
            )}%`,
          }}
        />
      </div>
      <label className="choice-percentage">
        {option.votes.length} out of {votesCount} total votes!
      </label>
    </div>
  );
  render() {
    const { question, hasAnswered, user } = this.props;
    let votesCount;
    try {
      votesCount =
        question.optionOne.votes.length + question.optionTwo.votes.length;
    } catch {
      return <Redirect to="/404" />;
    }

    return (
      <div className="question color-primary">
        {this.renderQuestionCardHeader()}
        <div className={`item-content${hasAnswered ? " answer-content" : ""}`}>
          <div className="content-image">
            <img alt="user avatar" src={user.avatarURL} />
          </div>
          <div
            className={
              "content-separator" + !hasAnswered ? "" : " answer-separator"
            }
          />
          <div className="content-text">
            <p className="would-you-rather">
              {hasAnswered ? "People Voted..." : "Would you rather"}
            </p>
            {!hasAnswered ? (
              this.renderOptionChoice()
            ) : (
              <form>
                {this.renderShowVoteResults(question.optionOne, votesCount)}
                {this.renderShowVoteResults(question.optionTwo, votesCount)}
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { question_id } = props.match.params;

  return {
    question: questions[question_id] ? questions[question_id] : null,
    user: questions[question_id] ? users[questions[question_id].author] : null,
    hasAnswered: questions[question_id]
      ? questions[question_id].optionOne.votes.includes(authedUser) ||
        questions[question_id].optionTwo.votes.includes(authedUser)
      : null,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionView));
