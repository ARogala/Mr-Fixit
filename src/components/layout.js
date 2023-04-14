import * as React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const Layout = () => {
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
			          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			            Services
			          </a>
			          <ul className="dropdown-menu">
			            <li><a className="dropdown-item" href="#">Handyman</a></li>
			            <li><a className="dropdown-item" href="#">Kitchen & Bath</a></li>
			            <li><a className="dropdown-item" href="#">Tile</a></li>
			            <li><a className="dropdown-item" href="#">Painting</a></li>
			            <li><a className="dropdown-item" href="#">Carpentry</a></li>
			          </ul>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#">Gallery</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#">About Me</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="#">Contact Me</a>
			        </li>
			        
			      </ul>
			    </div>
			  </div>
			</nav>
		</div>
	)
}

export default Layout