import React from 'react'
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div className='navbar_background'>
      <div className="navbar_contain">

      <div className="navbar_left_box">
        <h1>Pulse <span>.</span></h1>
      </div>
      <div className="navbar_middle_box">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li><Link to="restaurant">Restaurant</Link></li>
          <li><Link to="news">News</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar_right_box">
        <p>Reservations</p>
        <span> +652-345 3222 11</span>
      </div>
      </div>
      
         {/* <Link to="/">Home</Link> ---
         <Link to="about">About</Link>---
         <Link to="/admin/adminhome">AdminHome</Link>  */}
      
    </div>
  )
}

export default UserNavbar
