import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import notfound from '../assets/images/404.png'
import Nav from '../components/Nav'

const NotFoundPage = () => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title="Gnucoop - 404" />
    <header id="header">
      <h1>404 Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <span class="main image">
                <img src={notfound} alt="" />
              </span>
    </header>

  </Layout>
)

export default NotFoundPage
