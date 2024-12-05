import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.png'
// import cart from '../../assets/cart.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className='navbar'>
     <div className='nav-logo'>
     <HiOutlineShoppingBag />
        {/* <img src={logo} alt='' /> */}
        <p>SHOPPER</p>
     </div>
    <ul className='nav-menu'>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/Mens">Men</Link></li>
        <li><Link to="/Kids">Kids</Link></li>

        {/* <li>Shop</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li> */}
    </ul>
    <div className='nav-login-cart'>
        <button className='b'><Link to="/login">Login</Link></button>
        {/* <img src={cart} alt='/' /> */}
        <div className='l'>
        <CiShoppingCart />
        </div>
    </div>
    {/* <div className='s'>
        edwkjflw.f
    </div> */}
    </div>
   
    </>
  )
}

export default Navbar
