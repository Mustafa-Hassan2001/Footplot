import React from 'react' 
import "./Logo.css"
import { FaCartPlus } from 'react-icons/fa6'

const Logo = () => {
    return (
    <div className='flex-center logo'>
        <FaCartPlus/>
        <h1>Foot <span className="gradient-text"> Plot</span></h1>
    </div>
    )
}

export default Logo