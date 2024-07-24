import React from 'react' 
import "./About.css"
import shoe1 from "../../assets/shoe-1.jpeg"

const About = () => {
    return (
      <section id='about'>
        <div className="container">
          <div className="column about-image">
            <img src={shoe1} alt="" />
          </div>
          <div className="column">
            <h2 className="sub-title primary">About Us</h2>
            <h1 className="heading-1 gradient-text">Discover High-Quality Shoes Here</h1>
            <div className="content">
              <p className="muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit explicabo repellat 
                dolorem ex consequatur, necessitatibus cumque nihil in quae eum atque nobis delectus,
                dignissimos ea commodi voluptatibus tempore sunt.
              </p>
              <p className="muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit explicabo repellat 
                dolorem ex consequatur, necessitatibus cumque nihil in quae eum atque nobis delectus,
                dignissimos ea commodi voluptatibus tempore sunt.
              </p>
            </div>
            <div className="buttons-wrapper">
              <a href="#products" className="btn primary">Explore more</a>
            </div>
          </div>
        </div>
      </section>
    )
}
export default About
