import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
				<div className="container">
				  <a className="navbar-brand" ><i className="fa-solid fa-user-nurse logo"></i>OrthoClinic</a>
				  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						 <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto ">
						
					  <li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/home">Home</Link>
					  </li>
					  
					  <li className="nav-item">
						<Link className="nav-link " to="/about">About Us</Link>
					  </li>
					  <li className="nav-item dropdown">
						<Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/treatment">Treatments</Link>

						<ul className="dropdown-menu"> 
						<li className="nav-item"> <Link className="nav-link dropdown-item" to="/treatment">Our Treatments</Link></li>
						<li className="nav-item"> <Link className="nav-link dropdown-item" to="/joint-replacement">Joint Replacement</Link></li>
						<li className="nav-item"> <Link className="nav-link dropdown-item" to="/hip-replacement">Hip Replacement</Link></li>
                            <li className="nav-item"> <Link className="nav-link dropdown-item" to="/treatment">Arthroscopy</Link></li>
							<li className="nav-item dropdown">
							    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/joint-replacement">Joint Replacement</Link>
								<ul className="dropdown-menu">
								    <li className="nav-item"> <Link className="nav-link dropdown-item" to="/hip-replacement">Hip Replacement</Link></li>
									<li className="nav-item"> <Link className="nav-link dropdown-item" to="/treatment">Knee Replacement</Link></li>
								</ul>

							</li>

                        </ul>
					  </li>
					   <li className="nav-item">
						<Link className="nav-link" to="/contact">Contact</Link>
					  </li>
					  <Link to="/appointment"><button type="button" className="btn btn-danger appointment-btn">Make Appointment</button></Link>

					</ul>
					
				  </div>
				</div>
			  </nav>
    </>
  )
}

export default Navbar