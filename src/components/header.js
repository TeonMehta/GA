import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import logo from "../images/logo.png"
import './header.css'
import Image from "./image"


const Header = ({ siteTitle }) => (
  <nav>
    <div className="nav">
      <div className="brand"><Link to='/'><Image /> </Link></div>
      <div className="menu-wrapper">
        <ul className="menu-list">
          <li className="menu-item"><Link to='/about'>About Us</Link></li>
          <li className="menu-item">
            <Link to='/' className='dropdown-link'>Business</Link>
            <div className="dropdown-wrapper">
              <h3 className="dropdown-heading">Business</h3>
              <ul className="dropdown">
                <li className="sub-menu-item"><Link to='/corporate-tax'>Corporate Tax</Link></li>
                <li className="sub-menu-item"><Link to='/'>Financial Statements</Link></li>
                <li className="sub-menu-item"><Link to='/'>Bookkeeping</Link></li>
                <li className="sub-menu-item"><Link to='/'>Payroll</Link></li>
                <li className="sub-menu-item"><Link to='/'>New Business Formation</Link></li>
                <li className="sub-menu-item"><Link to='/'>CRA Audits</Link></li>
              </ul>
            </div>

          </li>
          <li className="menu-item">
            <Link to='/' className='dropdown-link'>Personal</Link>
            <div className="dropdown-wrapper">
              <h3 className="dropdown-heading">Personal</h3>
              <ul className="dropdown">
                <li className="sub-menu-item"><Link to='/'>Personal Tax</Link></li>
                <li className="sub-menu-item"><Link to='/'>Personal Financial Planning</Link></li>
              </ul>
            </div>

          </li>
          <li className="menu-item"><Link to='/faq'>FAQ</Link></li>
        </ul>
      </div>
      <div className="contact-btn-wrapper">
        <Link to='/contact' className='contact-btn'>Contact Us <span>&#8594;</span></Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
