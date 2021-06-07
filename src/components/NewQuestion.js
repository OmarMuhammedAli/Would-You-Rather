import React, { Component } from "react";
import { connect } from "react-redux";

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      optionOne: "",
      optionTwo: "",
    };
  }
  handleOptionChange = (e) => {
    const option = e.target;
    this.setState(() => ({
      [option.id]: option.value,
    }));
  };
  handleOptionsSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="new-question question">
        <div className="new-question-header">
          <p>Would You Rather</p>
        </div>
        <div className="new-question-content">
          <img
            alt="would you rather gif"
            src="http://25.media.tumblr.com/tumblr_m7cip7oZWe1rr6cyuo1_500.gif"
          />
          <form onSubmit={this.handleOptionsSubmit}>
            <input
              placeholder="Do something?"
              type="text"
              id="optionOne"
              value={this.state.optionOne}
              onChange={this.handleOptionChange}
            />
            <p>OR...</p>
            <input
              placeholder="The other?"
              type="text"
              id="optionTwo"
              value={this.state.optionTwo}
              onChange={this.handleOptionChange}
            />
            <button type="submit" id='submit'>Submit Question</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
