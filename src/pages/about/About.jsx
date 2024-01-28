import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Aboutimg from '../../assets/aboutimg1.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import './About.css'
const About = () => {
  return (
    <>
    <Navbar />
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/*Zoom Out Animation*/}
          <motion.div
          initial={{opacity:0.5,scale:0.5}}
          transition={{duration:1}}
          whileInView={{opacity:1,scale:1}}>
            <img src={Aboutimg} className='about-img'/>
          </motion.div>
          
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h3>About Dr.Sankar's Ortho Centre</h3>
          <h2>We Provide Essential Services For Your Knee & Joints</h2>
          <p>DR.R. Sankar Ram M.B.B.S. at Thanjavur Medical College (2000-2006) and continued his orthopaedic training at India’s “Mecca” of orthopaedics, Seth G.S. Medical College and K.E.M. Hospital (2007-2010). Several honours were bestowed upon him during his postgraduate training, including the “Best Orthopaedic Resident Award” and “The B Braun Scholarship for Excellence in Orthopaedic Redsidency.”
          After postgraduate training, he was fortunate to visit the centres of excellence in the USA, like the hospital for special surgery in New York, the Leatherman Institute in Kentucky, and so on. He has sharpened his skills in joint replacement surgeries.
          </p>
        </div>
      </div>
      <p> He was developed a passion for the treatment of sports injuries and completed the fellowship in arthroscopy and sports medicine under Dr. David Rajan, Coimbatore, who is considered one of the pioneers of arthroscopic surgery in this part of the world.

       From there on, he continued to work as a consultant knee and shoulder surgeon at Meenakshi Hospital, Thanjavur, before starting this centre to provide advanced and ethical care in arthroscopy and joint replacement.</p>
       <div className="aboutsec-appointment">
          <i className="fa-solid fa-stethoscope aboutsec-icon"></i>
          <h2 className='best-color aboutsecicon-word'>Our Specialist Treatment</h2> <br />
          <Link to={"/treatment"}><button type="button" className="btn btn-danger moreabout-btn">Read More</button></Link>
        </div>
    </div>
    </section>
    <section id='medical-care'>
      <div className="medicare-box">
        <div className="medicare-content">
        <i className="fa-regular fa-hospital about-icons"></i>
        <p className='about-points'>Our Best Services In Medical Care 24/7</p>
        <p>In medical services you can count on us. Even it is in the middle of the night. Even when its a holiday.</p>
        <i class="fa-solid fa-phone-volume about-icons"></i>
        <p className='about-points'>04467348721</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default About