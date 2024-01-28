import React from 'react'
import './replacement.css'
import Navbar from '../../components/navbar/Navbar'
import Joint from '../../assets/joint-pain.jpeg'
import Kneesurgery from '../../assets/knee-replacement.jpeg'
import Hipreplace from '../../assets/hip-replacement.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
const Replacement = () => {
  return (
    <>
    <Navbar />
    <section id='joint-sec'>
      <div className="container service-container">
        <h3>Orthopedic Services</h3>
        <h2>Joint Replacement</h2>
        <p>A surgical joint replacement is called an arthroplasty. A damaged joint is removed and replaced with an artificial joint by your healthcare provider. Metal, ceramic or heavy-duty plastic can be used for the artificial joint (Prosthesis). In appearance and movement, the prosthetic joint is similar to the natural one.</p>
      </div>
      <div className="container">
        <div className="row service-row">
          <div className="col-lg-6">
            <h2>Shoulder</h2>
            <div className="lists-contain">
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Arthroscopic stabilization of recurrent dislocation of shoulder.</p> <br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Arthroscopic repair of rotator cuff tear.</p> <br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Modified latarjet for recurrent dislocations with none loss.</p><br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Hemi and total shoulder replacement.</p> <br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Arthroscopic repair of sports injuries to shoulder.</p>
          </div>
          </div>
          <div className="col-lg-6">
            <img src={Joint} className='service-imgs' alt="" />
          </div>
          <div className="row service-row">
          <div className="col-lg-6 service-box">
              <img src={Hipreplace} className='service-imgs' alt="" />
              <h2>Hip Replacement</h2>
              <Link to={"/hip-replacement"} ><button type="button" className="btn btn-danger moreabout-btn">Learn More</button></Link>
            </div>
            <div className="col-lg-6 service-box">
              <img src={Kneesurgery} className='service-imgs' alt="" />
              <h2>Knee Replacement</h2>
              <button type="button" className="btn btn-danger moreabout-btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="aboutsec-appointment">
          <i className="fa-regular fa-calendar-days aboutsec-icon"></i>
          <h2 className='best-color aboutsecicon-word'>Open For Appointments</h2> <br />
          <Link to={"/appointment"}><button type="button" className="btn btn-danger moreabout-btn">Make Appointment</button></Link>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Replacement