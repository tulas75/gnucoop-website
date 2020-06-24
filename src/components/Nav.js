import React from 'react'
import Scrollspy from 'react-scrollspy'
import { Link } from 'gatsby'
import pic01 from '../assets/images/logo.png'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy currentClassName="is-active">
      <li>
        <span className="image left"><img src={pic01} alt="" /></span>
      </li>
      <li>
        <Link to="/" type="id" element="who-we-are">Home</Link>
      </li>
      <li >
        <Link to="/who-we-are" type="id" element="who-we-are">Who we are</Link>
      </li>
      <li>
        <Link to="/what-we-do" type="id" element="what-we-do">What we do</Link>
      </li>
      <li>
        <Link to="/blog" type="id" element="what-we-do">Blog</Link>
      </li>
      <li>
        <Link to="/training" type="id" element="academy">Training</Link>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
