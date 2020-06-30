import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/logo.png'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <ul>
      <li>
        <img src={pic01} alt=""
          style={{width: '33.6px', height: '30.2px', margin: '0 20px'}} />
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li >
        <Link to="/who-we-are">Who we are</Link>
      </li>
      <br /><hr />
      <li>
        <Link to="/what-we-do">What we do</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/training">Training</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
