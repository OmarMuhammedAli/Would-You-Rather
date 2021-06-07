import React, { Component } from "react";
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

 class Nav extends Component {
  handleLogOut = e => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(''))
  }
  render() {
    return (
      <div className='tab-nav'>
        <ul className='tab-menu'>
          <NavLink to='/questions'>
            <img alt='home' src='/images/tabs/home.png'/>
            Home 
          </NavLink>
          <NavLink to='/add'>
            <img alt='add a question' src='/images/tabs/question.png'/>
            Add a Questions
          </NavLink>
          <NavLink to='/leaderboard'>
            <img alt='leaderboard' src='/images/tabs/leaderboard.png'/>
            Leaderboard
          </NavLink>
          <li id='tab-contender'>
            {this.props.loggedIn? `logged in as ${this.props.user.name}`: 'Log In'}
            {/* {this.props.loggedIn? (<img alt='user avatar' src={this.user.avatarURL}/>): ''} */}
            {this.props.loggedIn?<span id='logout-hover' onClick={this.handleLogOut}> (Log Out) </span>:''}
            
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({users, authedUser}) => ({
  user: users[authedUser]? users[authedUser]: null,
  loggedIn: authedUser !== ''
})
export default connect(mapStateToProps)(Nav)