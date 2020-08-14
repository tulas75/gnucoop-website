import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import solutions from '../assets/images/solutions.png'
import products from '../assets/images/products.png'
import knowledge from '../assets/images/knowledge.png'

const WatDoPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>What we do</h1>
      <p>How we can help you</p>
    </header>
    <Helmet title="Gnucoop - What we do" />
    <div id="main">
      <section className="main special">
        <ul className="features">
          <li>
            <img src={solutions} alt="" />
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
		        <img src={products} alt="" />
            <a href="/products" style={{'textDecoration': 'none'}}>
              <h3>Our Products</h3>
              <p>
	              Working with our partners for many years had led us to identify some recurring problems.
                Even if we strongly believe that every project is a different experience, there are some questions that can be addressed with similar tools.
                Organisations that need to collect data they all experience similar problems, the same can be said for blockchain applications or in the domain of Geographical Information Systems.
                In these cases we have developed some products that we believe could be of great help to many organizations facing similar difficulties.
                If you want to know more about our products, have a look at this page!
              </p>
            </a>
          </li>
          <li>
            <img src={knowledge} alt="" />
            <a href="/knowledge" style={{'textDecoration': 'none'}}>
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
