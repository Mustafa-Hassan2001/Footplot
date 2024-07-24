import React from 'react'
import "./Footer.css"
import Logo from "../../Commons/Logo"
import SocialHandles from "../../Commons/SocialHandles"

const Footer = () => {
  return (
    <footer >
      <div className='container'>
        <Logo />
        <div className='flex-center footer-tabs'>
          <a href="#home" className='tab active'>
            <h4>Home</h4>
          </a>
          <a href="#about" className='tab'>
            <h4>About</h4>
          </a>
          <a href="#products" className='tab'>
            <h4>Products</h4>
          </a>
          <a href="#feedbacks" className='tab'>
            <h4>Feedbacks</h4>
          </a>
          <a href="#contact" className='tab'>
            <h4>Contact</h4>
          </a>
        </div>
        <SocialHandles/>
      </div>
      <div className='flex-center copyright'>
        <p className='muted'>Desgn & Bulit by Mustafa Hassan</p>
        <p>Copyright &copy; All right  reseverd -| 2024</p>
      </div>
    </footer>
  )
}
export default Footer
