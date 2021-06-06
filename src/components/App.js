import React, { Component } from "react";
import { connect } from "react-redux";
import {handleInitialFetch} from '../actions/shared'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialFetch())
    }
    render() {
    const { questionsIDs } = this.props;
    return (
      <div>
        <ul>
          {questionsIDs.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questionsIDs: Object.keys(questions),
  questions
});

export default connect(mapStateToProps)(App);
