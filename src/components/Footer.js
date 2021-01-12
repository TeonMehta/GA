import React from "react"
import PropTypes from "prop-types"
import './footer.css'
import Image from "./image"
import Link from "gatsby-link"

const Footer = ({siteTitle}) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-container container">
          <div className="footer-grid">
            <div className="column column-left">
              <div className="footer-logo">Logo</div>
              <div className="headline">We take care of your finances</div>
              <a href="#">Get a Free Consultation</a>
              <div className="copyright">Copyrights © 2021 Global Accounting Services. All Rights Reserved.</div>
            </div>
            <div className="column column-middle">
              <h5 className="heading">Company</h5>
              <ul className="footer-menu">
                <li className='footer-menu-item'><Link to='/'>Home</Link></li>
                <li className='footer-menu-item'><Link to='/'>Business</Link></li>
                <li className='footer-menu-item'><Link to='/'>Personal</Link></li>
                <li className='footer-menu-item'><Link to='/'>FAQ</Link></li>
                <li className='footer-menu-item'><Link to='/'>About us</Link></li>
                <li className='footer-menu-item'><Link to='/'>Contact us</Link></li>
              </ul>
            </div>
            <div className="column column-right">
              <h5 className="heading">Main Office</h5>
              <div className="address">49 Hillcrest Avenue, Suite 205 & 206,
                Brampton, ON L6W 4V4</div>
              <div className="phone">905-451-8081</div>
              <div className="email">info@globalaccounting.ca</div>
              <div className="hours">
                <p>Weekdays: 9AM - 5PM</p>
                <p>Weekdays: By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle : PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
