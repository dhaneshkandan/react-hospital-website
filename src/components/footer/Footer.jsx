import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row footer-row">
                <div className="col-lg-3 col-md-6 col-sm">
                <a className="navbar-brand" ><i className="fa-solid fa-user-nurse logo"></i>OrthoClinic</a>
                    <div className='footer-col'> 
                        <p>OrthoClinic Multispeciality Centre offer excellent orthopedic care among the best in the city. Public transportation is readily available from all major city areas to reach the clinic.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm">
                    <h4>Contact Details</h4>
                    <div className='footer-col'>
                       <i class="fa-solid fa-map-pin footer-icon"></i>
                       <p>No.01 Trichy Road, Anna Nagar, Thanjavur, TamilNadu 613001</p>
                       <i class="fa-regular fa-envelope footer-icon"></i>
                       <p>info@orthocliniccenter.com</p>
                       <i class="fa-solid fa-phone footer-icon"></i>
                       <p>04467348721</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm">
                <h4>Pages</h4>
                    <div className='footer-col'>
                       <p>Home</p>
                       <p>About Us</p>
                       <p>Treatment</p>
                       <p>Contact</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm">
                    <h4>Make Appointment</h4>
                    <div className='footer-col'>
                    <Link to={"/appointment"}><button type="button" className="btn btn-danger moreabout-btn">Make Appointment</button></Link>
                       <h4>Follow Us</h4>
                       <i class="fa-brands fa-facebook footer-icon"></i>
                       <i class="fa-brands fa-instagram footer-icon"></i>
                       <i class="fa-brands fa-whatsapp footer-icon"></i> 
                    </div>
                </div>
            </div>
            <div className="endline">         
                <p>Copyright © 2024 OrthoClinic and Multipeciality Center | Developed By <a href="https://github.com/dhaneshkandan"> J.Dhaeshkandan</a></p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer