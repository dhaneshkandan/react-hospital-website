import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Aboutimg from '../../assets/aboutimg1.jpg'
import Jointimg from '../../assets/joint.jpeg'
import Physioimg from '../../assets/phyiso.jpeg'
import Replaceimg from '../../assets/replace.jpeg'
import Phimg from '../../assets/ph.jpeg'
import Sportmedicin from '../../assets/Sportsmedicin.jpeg'
import Testimonial1 from '../../assets/Screenshot-65.png'
import Testimonial2 from '../../assets/Screenshot-66.png'
import Testimonial3 from '../../assets/Screenshot-67.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import './Home.css'
const Home = () => {
  return (
    <>
    <Navbar />
    <section id='banner'>
      <div className="container">
      {/*Zoom Out Animation*/}
      <motion.div className='banner-box' 
        initial={{opacity:0.5,scale:0.5}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}>
        <div className="banner-conten">
          <h1>Ortho & Multispeciality Centre</h1>
          <p>Physiotherapy | Arthroscopy | Sports Injuries | Joint Replacement | Knee Replacement | Hip Replacement</p>
          <Link to={"/treatment"}><button type="button" className="btn btn-danger moreabout-btn">Read More</button></Link>
        </div>
      </motion.div>
      </div>
    </section>
    <section id='aboutus'>
    <div className="container">
      <div className="row">
        {/*Image Slide Animation*/}
        <motion.div className="col-lg-6 col-md-12 col-sm-12" 
         initial={{x:-500,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:3}}}
         >
          <img src={Aboutimg} className='about-img'/>
        </motion.div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h3>About Dr.Sankar's Ortho Centre</h3>
          <h2>We Provide Essential Services For Your Knee & Joints</h2>
          <p>DR.R. Sankar Ram M.B.B.S. at Thanjavur Medical College (2000-2006) and continued his orthopaedic training at India’s “Mecca” of orthopaedics, Seth G.S. Medical College and K.E.M. Hospital (2007-2010). Several honours were bestowed upon him during his postgraduate training, including the “Best Orthopaedic Resident Award” and “The B Braun Scholarship for Excellence in Orthopaedic Redsidency.”</p>
          <div className="row icon-rows">
            <div className="col-lg-6 col-md-6 col-sm-12 icon-rows">
              <i className="fa-solid fa-stethoscope about-icons"></i>
              <p className='about-points'>Quality of care services</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 icon-rows">
            <i className="fa-regular fa-hospital about-icons"></i>
            <p className='about-points'>Standards of treatment</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 icon-rows">
              <i className="fa-solid fa-user-doctor about-icons"></i>
              <p className='about-points'>Experienced Doctors</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 icon-rows">
            <i className="fa-regular fa-clock about-icons"></i>
            <p className='about-points'>24/7 Working time</p>
            </div>
          </div>
          <div className="lists-contain">
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>24 Hours Emergency assistance call us</p> <br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>We are committed to providing ortho service</p> <br />
          <i className="fa-solid fa-check about-list-icon"></i> <p className='about-list'>Really know the true needs and expectations of patients</p>
          </div>
           <Link to={"/about"}><button type="button" className="btn btn-danger moreabout-btn">More About Us</button></Link>
        </div>
      </div>
    </div>
    </section>
    <section id='best'>
      <div className="container">
        <h3 className='best-color'>Best Ortho Clinic</h3>
        <h2 className='best-color'>Our Ortho Treatments</h2>
        <p className='best-color'>Dr. Sankar’s Ortho and Multispeciality centre  is one of the best ortho clinic in thanjavur. Dr. Sankar Ram provided excellent care to our patients in our clinic also treats sports injuries and related knee and shoulder problems. The treatments we offer at our hospital are listed below.</p>         
   
      </div>
      <div className="container bestsec-container">
        <div className="row">
          <div className="col-lg-4 col-md col-sm items-centern">
            <motion.div className="bestsec-box" 
             initial={{opacity:0.5,scale:0.5}}
             transition={{duration:0.5}}
             whileInView={{opacity:1,scale:1}}>
              <div className="bestsec-content">
                <img src={Jointimg} className='bestsec-img'/>
                <h4>Joint Replacemnet</h4>
                <p>Arthroplasty, also called joint replacement, is surgery to replace a damaged joint with an artificial joint or dysfunction is not alleviated by less-invasive therapies.(made of metal, ceramic or plastic).</p>
                 <Link to={"/joint-replacement"}><button type="button" className="btn btn-danger moreabout-btn">Learn More</button></Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md col-sm items-centern">
          <motion.div className="bestsec-box"
            initial={{opacity:0.5,scale:0.5}}
            transition={{duration:0.7}}
            whileInView={{opacity:1,scale:1}}>
              <div className="bestsec-content">
                <img src={Physioimg} className='bestsec-img'/>
                <h4>Physiotherapy</h4>
                <p>Physiotherapist usually combine manual therapy with exercise prescription and rehabilitation which will lead a fast recovery of your function. hey teach various exercise which helps to restore joint movements.</p>
                <Link to={"/treatment"}><button type="button" className="btn btn-danger moreabout-btn">Learn More</button></Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md col-sm items-centern">
          <motion.div className="bestsec-box"
          initial={{opacity:0.5,scale:0.5}}
          transition={{duration:1}}
          whileInView={{opacity:1,scale:1}}>
              <div className="bestsec-content">
                <img src={Replaceimg} className='bestsec-img'/>
                <h4>Knee Replacement</h4>
                <p>In knee replacement surgery the worn out portion of the knee joint is removed. The denuded cartilage of the Both in the thigh bone as well as in the leg bone metal insert are inserted using a special acrylic cement.</p>
                <button type="button" className="btn btn-danger moreabout-btn">Learn More</button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bestsec-appointment">
          <i className="fa-regular fa-calendar-days bestsec-icon"></i>
          <h2 className='best-color bestsecicon-word'>Open For Appointments</h2> <br />
          <Link to={"/appointment"}><button type="button" className="btn btn-danger moreabout-btn">Make Appointment</button></Link>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3>We Are Specialized In</h3>
            <h2>Physiotherapy</h2>
            <p>Physiotherapy helps to restore movement and function affected by injury illness or disability. It is useful for people of all ages, having problems such as back pain, neck pain, shoulder pain and sports injuries. In a specific no of cases physiotherapy helps us to resolve pain without the need for medicines.</p>
            <Link to={"/treatment"}><button type="button" className="btn btn-danger moreabout-btn">Learn More</button></Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/*Zoom Out Animation*/}
            <motion.div
            initial={{opacity:0.5,scale:0.5}}
            transition={{duration:1}}
            whileInView={{opacity:1,scale:1}}>
              <img src={Phimg} className='about-img' alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <section id='Multispeciality'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/*Zoom Out Animation*/}
            <motion.div
            initial={{opacity:0.5,scale:0.5}}
            transition={{duration:1}}
            whileInView={{opacity:1,scale:1}}>
              <img src={Sportmedicin} className='about-img' alt="" />
            </motion.div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
          <h3 className='best-color'>Best Ortho & Multispeciality Centre</h3>
          <h2 className='best-color'>Comprehensive Management Of Sports Injuries And Ligament Injuries</h2>
          <p className='best-color'>Accurate diagnosis of all ligament injuries, and patient specific management with a combination of rest, immobilization, employing splints and simultaneous mobilization  in the safe range, allowing quick healing and early return to all activities.

Arthroscopic management of neglected ligament injuries and ligament reconstruction.</p>    
          <button type="button" className="btn btn-danger moreabout-btn">Learn More</button>
     
   
          </div>
        </div>
      </div>
    </section>
    <section id='testimonial'>
      <div className="container">
      <h3>Testimonials</h3>
      <h2>What Patients Say About Us</h2>
      <div id="project-carousel" class="carousel slide projects" data-bs-ride="false">
		
		<div class="carousel-inner">
		  <div class="carousel-item active">
			{/**Enter */}
			<img src={Testimonial1} alt="" />
		  </div>
		  <div class="carousel-item ">
      <img src={Testimonial2} alt="" />
		  </div>
      <div class="carousel-item ">
      <img src={Testimonial3} alt="" />
		  </div>
		  
		</div>
		<button class="carousel-control-prev " type="button" data-bs-target="#project-carousel" data-bs-slide="prev">
		  <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
		  <span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#project-carousel" data-bs-slide="next">
		  <span class="carousel-control-next-icon" aria-hidden="true"></span>
		  <span class="visually-hidden">Next</span>
		</button>
	  </div> 
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Home