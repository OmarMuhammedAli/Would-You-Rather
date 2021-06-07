import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialFetch } from "../actions/shared";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginView from "./LoginView";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import QuestionView from "./QuestionView";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialFetch());
  }
  render() {
    const { loggedIn, loading } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading ? null : <Nav />}
          <div className="app-content">
            {loading ? null : !loggedIn ? (
              <LoginView />
            ) : (
              <Fragment>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/questions" />
                  </Route>
                  <Route path="/questions" exact component={Dashboard} />
                  <Route path="/add" exact component={NewQuestion} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route
                    path="/questions/:question_id"
                    exact
                    component={QuestionView}
                  />
                  <Route path="/404" component={NotFound} />
                  <Redirect to="/404" />
                </Switch>
              </Fragment>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  questionsIDs: Object.keys(questions),
  loggedIn: authedUser !== "",
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
