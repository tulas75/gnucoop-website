import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'
import menu from '../assets/images/menu.svg'
import search from '../assets/images/search.svg'
import SearchBar from './SearchBar'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sideNav: false, searchBar: false }
    this.props = props
  }

  showSideNav = () => {
    this.setState(() => ({ ...this.state, sideNav: true }))
  }

  hideSideNav = () => {
    this.setState(() => ({ ...this.state, sideNav: false }))
  }

  toggleSearchBar = () => {
    if (!this.state.searchBar) { // about to show search bar
      document.getElementById('searchInput').focus()
    }
    this.setState(() => ({ ...this.state, searchBar: !this.state.searchBar }))
  }

  render() {
    return (
      <div>
        <nav id="nav" className={this.props.sticky ? 'alt' : ''}>
          <ul>
            <li className="smallNavItem">
              <Link className="imageLink" onClick={this.showSideNav}>
                <img src={menu} alt="show menu" style={{width: '28px', height: '28px'}} />
              </Link>
            </li>
            <li className="largeNavItem">
              <Link to="/" className="imageLink">
                <img src={logo} alt="home" style={{width: '33.6px', height: '30.2px'}} />
              </Link>
            </li>
            <li className="largeNavItem">
              <Link to="/who-we-are">Who we are</Link>
            </li>
            <li className="largeNavItem">
              <Link to="/what-we-do">What we do</Link>
            </li>
            <li className="largeNavItem">
              <Link to="/partners">Partners</Link>
            </li>
            <li className="largeNavItem">
              <Link to="/blog/1">Blog</Link>
            </li>
            <li className="largeNavItem">
              <Link to="/training">Training</Link>
            </li>
            <li className="smallNavItem" id="spacerLi">
            </li>
            <li id="searchLi"
              style={this.state.searchBar ? {} : {width: 0, overflow: 'hidden'}}>
              <SearchBar
                width="100%"
                id="searchInput"
                placeholder="Search Site"
                data={this.props.searchData || []}
              />
            </li>
            <li>
              <Link className="imageLink" onClick={this.toggleSearchBar}>
                <img src={search} alt="search" style={{width: '25px', height: '25px'}} />
              </Link>
            </li>
          </ul>
        </nav>

        <div id="sideNavBg" onClick={this.hideSideNav}
            className={this.state.sideNav ? 'visible' : ''} />
        
        <nav id="sideNav"
            className={this.state.sideNav ? 'visible' : ''}>
          <ul>
            <li>
              <img src={logo} alt=""
                style={{width: '33.6px', height: '30.2px', margin: '0 9px'}} />
            </li>
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
