import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialFetch } from "../actions/shared";
import LoginView from "./LoginView";
import DashboardNavigation from "./DashboardNavigation";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialFetch());
  }
  render() {
    const { questionsIDs, loggedIn, loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <div className="app-content">
          {loading ? null : !loggedIn ? <LoginView /> : <DashboardNavigation />}
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
