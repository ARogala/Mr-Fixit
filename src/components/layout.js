import * as React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const Layout = ({children}) => {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg bg-light">
			  <div className="container-fluid">
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarNavDropdown">
			      <ul className="navbar-nav">
			        <li className="nav-item">
			          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
			        </li>
			        <li className="nav-item dropdown">
			          <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			            Services
			          </span>
			          <ul className="dropdown-menu">
			            <li><Link className="dropdown-item" to="/">Handyman</Link></li>
			            <li><Link className="dropdown-item" to="/">Kitchen & Bath</Link></li>
			            <li><Link className="dropdown-item" to="/">Tile</Link></li>
			            <li><Link className="dropdown-item" to="/">Painting</Link></li>
			            <li><Link className="dropdown-item" to="/">Carpentry</Link></li>
			          </ul>
			        </li>
			        <li className="nav-item">
			          <Link className="nav-link" to="/">Gallery</Link>
			        </li>
			        <li className="nav-item">
			          <Link className="nav-link" to="/about">About Me</Link>
			        </li>
			        <li className="nav-item">
			          <Link className="nav-link" to="/contact">Contact Me</Link>
			        </li>
			        
			      </ul>
			    </div>
			  </div>
			</nav>
			{children}
		</div>
	)
}

export default Layout