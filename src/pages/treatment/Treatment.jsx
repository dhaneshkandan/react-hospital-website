import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Arthroscopyimg from '../../assets/hand.jpeg'
import Sportsimg from '../../assets/football.jpeg'
import Legimg from '../../assets/leg.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import './Treatment.css'
const Treatment = () => {
  return (
    <>
    <Navbar />
    <section id='treatment-sec'>
    <div className=' container treatment-div'>
    <h3>Ortho Services</h3>
    <h2>Our Treatments</h2>
    <p>A full range of knee and shoulder orthopedic services are available to patients in our service area, as well as more than multispecialty orthopedic care. You can discover more about specialized care by selecting a particular service</p>
    </div>
    <div className="container">
      <div className="row treats-box">
        <div className="col-lg-6 col-md col-sm">
          <h2>Arthroscopy</h2>
          <p>Arthroscopy is a surgical procedure that looks at, diagnoses, and treats problems inside a joint. This is a minor surgery that can be done outpatient, meaning you can go home the same day. It may be recommended if you have inflammation in a joint, have been injured in a joint, or have damaged a joint over time. Arthroscopy can be done on any joint. Usually, it is done on a knee, shoulder, elbow, ankle, hip, or wrist. To determine how much damage is in the joint, your doctor inserts a tool called an Arthroscope through several small cuts in your joint. They can also repair many injuries during arthroscopy.</p>
        </div>
        <div className="col-lg-6 col-md col-sm">
          {/*Zoom Out Animation*/}
          <motion.div
          initial={{opacity:0.5,scale:0.5}}
          transition={{duration:1}}
          whileInView={{opacity:1,scale:1}}>
            <img src={Arthroscopyimg} className='treats-imgs' alt="" />
          </motion.div>
          
        </div>
      </div>  
      <div className="row treats-box">
        <div className="col-lg-6 col-md col-sm">
          {/*Zoom Out Animation*/}
          <motion.div
          initial={{opacity:0.5,scale:0.5}}
          transition={{duration:1}}
          whileInView={{opacity:1,scale:1}}>
            <img src={Sportsimg} className='treats-imgs' alt="" />
          </motion.div>
          
        </div>
        <div className="col-lg-6 col-md col-sm">
          <h2>Sports Injuries(Physiotherapy)</h2>
          <p>Sports injuries are common and can occur throughout your body to bones, muscles, tendons, ligaments and other structures. You can treat many minor injuries at home with rest, ice, compression, elevation and over-the-counter pain medications. But some injuries require medical treatment, such as immobilization, physical therapy and surgery. Sports injuries can affect any part of your body. They most often affect:  Achilles tendon, Ankle, Elbow, Head, Knee, Shoulder. </p>
        </div>
      </div>
      <div className="row treats-box">
      <div className="col-lg-6 col-md col-sm">
        <h2>Joint Replacements</h2>
        <p>Joint replacement is a surgical procedure in which parts of an arthritic or damaged joint are removed and replaced with a metal, plastic, or ceramic device called a prosthesis. The prosthesis is designed to replicate the movement of a normal, healthy joint. Hip and knee replacements are the most commonly performed joint replacements, but replacement surgery can be performed on other joints, as well, including the ankle, wrist, shoulder, and elbow.</p>
        <Link to={"/joint-replacement"}><button type="button" className="btn btn-danger moreabout-btn">More Treatments</button></Link>
      </div>
      <div className="col-lg-6 col-md col-sm">
        {/*Zoom Out Animation*/}
        <motion.div
        initial={{opacity:0.5,scale:0.5}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}>
          <img src={Legimg} className='leg-img' alt="" />
        </motion.div>
        
      </div>
      </div>
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Treatment