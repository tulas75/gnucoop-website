import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic01 from '../assets/images/pic01.jpg'
import blog1 from '../assets/images/smwo_pic.jpg'
import Nav from '../components/Nav'

class Generic extends React.Component {
  
  render() {

    return (
      <Layout>
        <Nav sticky={true} />
        <Helmet title="Generic Page Title" />
        <header id="header">
        <h1>Blog & Articles</h1>
        <p>News from us</p>
    </header>
        <div id="main">
        <section class="main">
        <ul class="features">
            <li>
            <span className="main image "><img src={blog1} alt="" /></span>
                <h3>Smart-Coop</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
        </ul>
		</section>
        </div>
      </Layout>
    )
  }
}

export default Generic