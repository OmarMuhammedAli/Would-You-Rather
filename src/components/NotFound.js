import React from "react";
import {NavLink} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404 - Page Not Found</h1>
      <img
        alt="page not found"
        src="https://cdn.dribbble.com/users/14248/screenshots/1240413/404-dribb.gif"
      />
      <NavLink to='/#'>
        <button id='back-to-home'>Back to Home</button>
      </NavLink>
    </div>
  );
}
