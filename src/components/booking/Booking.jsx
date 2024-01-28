import React from 'react'
import './Booking.css'
import CurrentDateComponent from '../current-date/date'
import Navbar from '../navbar/Navbar'
const Booking = () => {
  return (
    <>
    <Navbar />
    <section id='booking-sec'>
    <div className="container">
        <h2 className='text-center'>Appointment</h2>
        <div className="booking-box">
            <h4>Booking Details</h4>
            <div className="booking-fields">
                <h3>Booking Date:</h3> <CurrentDateComponent />
            </div>
            <div className="booking-fields">
                <label htmlFor="">Patient Name:</label>
                <input type="text" name="" id="" />
            </div>
            <div className="booking-fields">
                <label htmlFor="">Mobile Number:</label>
                <input type="tel" name="" id="" />
            </div>
            <div className="booking-fields">
            <label htmlFor="">Timing:</label> <br />
                <select name="" id="">
                <option value="">Select Timing</option>
                <option value="">9:00AM to 10:00AM</option>
                <option value="">10:00AM to 11:00AM</option>
                <option value="">11:00AM to 12:00PM</option>
                <option value="">12:00PM to 1:00PM</option>
                <option value="">1:00PM to 2:00PM</option>
                <option value="">2:00PM to 3:00PM</option>
                <option value="">4:00PM to 5:00PM</option>
                </select>
            </div>
            
            
            <p>1. Name Change Not Allowed.</p>
            <p>2. Allotted time change not Allowed.</p>
            <p>3. This Appointment is for one Person only.</p>
            <p>4. Please note, minimum waiting time to consult the doctor after reporting is 45 minutes.</p>
            <p>5. Please note that your booking is confirmed only if you receive the confirmation SMS. If not, please contact the clinic before your visit.</p>
            <button type="button" className="btn btn-danger moreabout-btn">Book</button>
        </div>
    </div>
    </section>
    </>
  )
}

export default Booking