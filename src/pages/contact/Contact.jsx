import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Contact.css'
import Footer from '../../components/footer/Footer'
const Contact = () => {
  return (
    <>
    <Navbar />
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-box">
            <div className="contact-content">
              <div className="fild">
                <label htmlFor="">Enter Your Name</label><br />
              <input type="text" /> <br />
              </div>
              <div className="fild">
                <label htmlFor="">Enter Your Mobile Number</label><br />
              <input type="number" name="" id="" /> <br />
              </div>
              <div className="fild">
              <label htmlFor="">Enter Your Email</label><br />
              <input type="email" name="" id="" /> <br />
              </div>
              <div className="fild">
              <label htmlFor="">Message us</label><br />
              <input type="text" className='message-field' />
              </div>
              <div className='text-center pt-2'>
              <button type="button" className="btn btn-danger moreabout-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ">
          <h2>Let's Get In Touch</h2>
          <div className="contact-list">
          <i className="fa-regular fa-hospital about-icons"></i>
          <p className='about-points'>No.01 Trichy Road, Anna Nagar, Thanjavur, TamilNadu 613001</p> <br />
          </div>
          <div className="contact-list">
          <i class="fa-regular fa-envelope about-icons"></i>   
          <p className='about-points'>info@orthocliniccenter.com</p><br />
          </div>
          <div className="contact-list">
          <i class="fa-solid fa-phone about-icons"></i>
          <p className='about-points'>04467348721</p>
          </div>
          <h4>Follow Us On Social Media</h4>
          <i class="fa-brands fa-facebook social-icon"></i>
          <i class="fa-brands fa-instagram social-icon"></i>
          <i class="fa-brands fa-whatsapp social-icon"></i>
          <div className="working">
            <h4>Working Hours</h4>
            <i className="fa-regular fa-clock about-icons"></i>
            <p className='about-points'> Mon - Thurs : 9.00 A.M - 5.00 P.M</p> <br />
            <i className="fa-regular fa-clock about-icons"></i>
            <p className='about-points'> Fri - Sun : 9.00 A.M - 1.00 P.M</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Contact