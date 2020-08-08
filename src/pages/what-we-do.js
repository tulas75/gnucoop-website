import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import solutions from '../assets/images/solutions.png'
import knowledge from '../assets/images/knowledge.png'
import team from '../assets/images/team.png'

const WatDoPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>What we do</h1>
      <p>Sectors of intervention</p>
    </header>
    <Helmet title="Gnucoop - What we do" />
    <div id="main">
      <section class="main special">
        <ul class="features">
          <li>
            <img src={team} alt="" />
            <a href="/solutions" style={{'textDecoration': 'none'}}>
              <h3>Our Solutions</h3>
              <p>
                We support NGO and non-profit organisations in their work.
                We have experience in several fields of development, from education to agriculture.
                We use effective and sustainable technological solutions that are already available or, when necessary, we develop our own.
                If you have a problem, together we can think of a solution!
              </p>
            </a>
          </li>
          <li>
		<img src={solutions} alt="" />
            <a href="/products" style={{'textDecoration': 'none'}}>
              <h3>Our Products</h3>
              <p>
                Bla bla...
              </p>
            </a>
          </li>
          <li>

		<img src={knowledge} alt="" />
            <a href="/knowledges" style={{'textDecoration': 'none'}}>
              <h3>Our Knowledge</h3>
              <p>
                The world of technology evolves at an incredible pace.
                That's why we keep studying and learning new stuff so that we can always use the most effective solutions.
                We don't like the hype, but we believe that innovation starts when you ask yourself “what's next?”.
                We know there are still many things we don’t know but hey, let’s be honest, we master some key technologies that could make a huge difference to your projects!
                Here are some of them!
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default WatDoPage
