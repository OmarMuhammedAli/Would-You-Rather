import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardNavigation from "./DashboardNavigation";
import QuestionsCollection from './QuestionsCollection'

class Dashboard extends Component {
  render() {
    const { answeredIDs, unAnsweredIDs } = this.props;
    
    return (
      <div className="poll">
        <DashboardNavigation />
        <QuestionsCollection ids={answeredIDs} status='answered'/>
        <QuestionsCollection ids={unAnsweredIDs} status=''/>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
  const answeredQuestionsIDs = Object.keys(users[authedUser].answers);
    
  const unAnsweredIDs = Object.values(questions)
  .filter((questionID) => !answeredQuestionsIDs.includes(questionID.id))
  .sort((a, b) => b.timestamp - a.timestamp)
  .map(question => question.id);

  const answeredIDs = Object.values(questions)
    .filter((questionID) => answeredQuestionsIDs.includes(questionID.id))
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(question => question.id);
  return {
    answeredIDs,
    unAnsweredIDs,
  };
};

export default connect(mapStateToProps)(Dashboard);
