import React from "react"
import Link from "gatsby-link"
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="hero-container container">
        <div className="ui grid">
          <div className="hero-column">
            <div className="hero-content">
              <h1 className="hero-heading">Lorem ipsum dolor sit amet, cnim, esepellendus sit?</h1>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur, doloremque, dolores eveniet, exercitationem fuga harum impedit ipsum maxime minus nihil nulla obcaecati perspiciatis porro qui sed ullam vitae voluptate.</p>
              <div className="hero-btn-wrapper">
                <Link to='/' className='hero-primary-btn btn'>Request An Estimate</Link>
                <Link to='/' className='hero-secondary-btn btn'>Schedule a Call</Link>
              </div>
            </div>
          </div>
          <div className="hero-column">
            <div className="hero-image">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
