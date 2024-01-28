import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './Hip.css'
const Hip = () => {
  return (
    <>
    <Navbar />
    <section id='hipreplace-sec'>
      <div className="container">
        <p className='text-center'>
        The damaged parts of the hip joint is removed and artificial joint is inserted in it. Artificial joint is constructed of metal or ceramic cross linked polyethyle. Hip replacement can be done for two reason, one is fractures involving the neck of femur for which hip replacement is the viable and useful option and the second reason is avascular necrosis of the femoral head which leads to secondary arthritis of the hip joint. In this case total hip replacement is necessary.
        </p>
        <h2 className='text-center'>Types Of Hip Replacement</h2>
        <div className="hiptypes">
          <h4>Hemi Arthroplasty:</h4>
          <p>Hemi arthroplasty is commonly done for fracture of neck of femur patient. Hip joint is a ball and socket joint. If the ball alone is broken, the cup can be left untouched in elderly people more than 60 years of age.
           The broken head portion is alone removed and replaced with an artificial metal. This is called hemi orthoplasty. Only the ball of the hip joint is removed and replaced with the metal.</p>
        </div>
        <div className="hiptypes">
          <h4>Total Hip Replacement:</h4>
          <p>This is usually for patients having severe arthritis, where both the cup and the ball is damaged. In younger individuals, even if the ball alone is damaged / broken, THR is required. Both the cup as well as the ball is changed.</p>
        </div>
        <div className="hiptypes">
          <h4>Result:</h4>
          <p>98% of those who have undergone THR experience a dramatic reduction in hip pain and benefit from improved mobility and movement. Most are able to resume daily activity.</p>
        </div>
        <div className="aboutsec-appointment">
        <i className="fa-regular fa-calendar-days aboutsec-icon"></i>
          <h2 className='best-color aboutsecicon-word'>Book Appointment</h2> <br />
          <Link to={"/appointment"}><button type="button" className="btn btn-danger moreabout-btn">Make Appointment</button></Link>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Hip