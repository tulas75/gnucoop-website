import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Home</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Who we are</a>
                </Scroll>
            </li>
            <li>
            <Scroll type="id" element="first">
                    <a href="#">How we can help</a>
            </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Products</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Blog</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Contacts</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
