import React, { Component } from "react";
import { connect } from "react-redux";
import {setAuthedUser} from '../actions/authedUser'

class LoginView extends Component {
  handleSubmitSignIn = (e) => {
    e.preventDefault();
    const {dispatch} = this.props
    const dropDownValue = document.getElementById('players').value
    console.log(dropDownValue)
    dispatch(setAuthedUser(dropDownValue))
  };
  render() {
    const { players } = this.props;
    return (
      <div className="login">
        <header className="login-header">
          <span>Welcome back! Sign in to proceed!</span>
        </header>
        <div className="login-content" onSubmit={this.handleSubmitSignIn}>
          <form className="login-form">
            <div className="signin login-heading">Sign In</div>
            <select name="players" id="players">
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
            <button id="sign-in" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const players = Object.values(users).map((player) => ({
    id: player.id,
    name: player.name,
  }));
  return { players };
};
export default connect(mapStateToProps)(LoginView);
