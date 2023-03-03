import React from 'react'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <Fragment>

      <Link className="nav-link" to="/">
        <div>Home</div>
      </Link>

      <Link className="nav-link" to="/AdminLogin">
        <div>View Result</div>
      </Link>
      
      <div className="links-container">
        <Link className="nav-link" to="/AdminRegistration">
          ADMIN
        </Link>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;