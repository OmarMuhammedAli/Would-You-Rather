import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsCollection from "./QuestionsCollection";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      status: "unAnswered",
    };
  }
  handleStatusChange = (status) => {
    this.setState({
      status,
    });
  };
  render() {
    const { answeredIDs, unAnsweredIDs } = this.props;
    const { status } = this.state;
    return (
      <div className="poll">
        <div className="poll-nav">
          <button onClick={() => this.handleStatusChange("unAnswered")}>
            <img
              height="22px"
              alt="unanswered tab"
              src="https://www.freepnglogos.com/uploads/question-mark-png/question-mark-png-letter-profro-questions-glad-you-didn-7.png"
            />
            <p>Unanswered Questions</p>
          </button>
          <button onClick={() => this.handleStatusChange("answered")}>
            <img
              height="22px"
              alt="answered tab"
              src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-right-answer-icon-image_1344787.jpg"
            />
            <p>Answered Questions</p>
          </button>
        </div>
        <QuestionsCollection
          ids={status === "answered" ? answeredIDs : unAnsweredIDs}
          status={status}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
  const answeredQuestionsIDs = Object.keys(users[authedUser].answers);

  const unAnsweredIDs = Object.values(questions)
    .filter((questionID) => !answeredQuestionsIDs.includes(questionID.id))
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((question) => question.id);

  const answeredIDs = Object.values(questions)
    .filter((questionID) => answeredQuestionsIDs.includes(questionID.id))
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((question) => question.id);
  return {
    answeredIDs,
    unAnsweredIDs,
  };
};

export default connect(mapStateToProps)(Dashboard);
