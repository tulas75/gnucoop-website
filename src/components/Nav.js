import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'
import menu from '../assets/images/menu.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mobileNav: false }
    this.props = props
  }

  showMobileNav = () => {
    this.setState(() => ({ mobileNav: true }))
  }

  hideMobileNav = () => {
    this.setState(() => ({ mobileNav: false }))
  }

  render() {
    return (
      <div>
        <nav id="nav" className={this.props.sticky ? 'alt' : ''}>
          <ul>
            <li className="mobileNav">
              <img src={menu} alt="" onClick={this.showMobileNav}
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
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li className="desktopNav">
              <Link to="/blog/1">Blog</Link>
            </li>
            <li className="desktopNav">
              <Link to="/training">Training</Link>
            </li>
          </ul>
        </nav>

        <div id="mobileNavBg" onClick={this.hideMobileNav}
            className={this.state.mobileNav ? 'visible' : ''} />
        
        <nav id="mobileNav"
            className={this.state.mobileNav ? 'visible' : ''}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/who-we-are">Who we are</Link>
            </li>
            <li>
              <Link to="/what-we-do">What we do</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/blog/1">Blog</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
