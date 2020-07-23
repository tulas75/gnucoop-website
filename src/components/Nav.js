import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'
import menu from '../assets/images/menu.svg'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <ul>
      <li className="mobileNav">
        <img src={menu} alt=""
          style={{width: '30px', height: '30px', margin: '0 20px'}} />
      </li>
      <li class="desktopNav">
        <img src={logo} alt=""
          style={{width: '33.6px', height: '30.2px', margin: '0 20px'}} />
      </li>
      <li className="desktopNav">
        <Link to="/">Home</Link>
      </li>
      <li className="desktopNav">
        <Link to="/who-we-are">Who we are</Link>
      </li>
      <li className="desktopNav">
        <Link to="/what-we-do">What we do</Link>
      </li>
      <li className="desktopNav">
        <Link to="/blog/1">Blog</Link>
      </li>
      <li className="desktopNav">
        <Link to="/training">Training</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
