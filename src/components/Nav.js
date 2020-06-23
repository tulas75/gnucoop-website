import React from 'react'
import Scrollspy from 'react-scrollspy'
import { Link } from 'gatsby'
import pic01 from '../assets/images/logo.png'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={['intro', 'first', 'second', 'cta']} currentClassName="is-active" offset={-300}>
      <li>
        <span className="image left"><img src={pic01} alt="" /></span>
      </li>
      <li>
        <Link to="/" type="id" element="intro">Home</Link>
      </li>
      <li >
        <Link to="/who-we-are" type="id" element="intro">Who we are</Link>
      </li>
      <li>
        <Link to="what-we-do" type="id" element="first">What we do</Link>
      </li>
      <li>
        <Link to="/blog" type="id" element="cta">Blog</Link>
      </li>
      <li>
        <Link to="/training" type="id" element="cta">Training</Link>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
