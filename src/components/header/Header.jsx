 import React from 'react'
 import './Header.css'
 const Header = () => {
   return (
     <>
     <header>
        <div className="container">
            <i className="fa-regular fa-clock about-icons"></i>
            <p className='about-points'> Mon - Thurs : 9.00 A.M - 5.00 P.M</p>
            <div className="header-col">
                <i class="fa-regular fa-envelope about-icons"></i>   
                <p className='about-points'>info@orthocliniccenter.com</p>
                <i class="fa-solid fa-phone about-icons"></i>
                <p className='about-points'>04467348721</p>
            </div>
        </div>    
     </header>
     </>
   )
 }
 
 export default Header