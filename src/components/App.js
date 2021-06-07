import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialFetch } from "../actions/shared";
import LoginView from "./LoginView";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import QuestionView from './QuestionView'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialFetch());
  }
  render() {
    const {loggedIn, loading} = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <div className="app-content">
          {loading ? null : !loggedIn ? <LoginView /> : <QuestionView match={{params: {id: 'vthrdm985a262al8qx3do'}}} />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  questionsIDs: Object.keys(questions),
  loggedIn: authedUser !== "",
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
