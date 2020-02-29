import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Gnucoop</h1>
        <p>IT for non profit<br />
        <a href="/how-we-can-help">Support for your projects</a>.</p>
    </header>
)

export default Header
