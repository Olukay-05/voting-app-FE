import React from 'react'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import "../navigation/Navigation.css";

const Navigation = () => {

  return (
    <Fragment>

      <div className="navigation">

        <Link className="logo-container" to="/">
          <div>Home</div>
        </Link>

       
        
        <div className="links-container">
        <Link className="nav-link" to="/AdminLogin">
            <div>View Result</div>
        </Link>

          <Link className="nav-link" to="/AdminRegistration">
            ADMIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;