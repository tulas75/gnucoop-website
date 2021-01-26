import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Waypoint } from 'react-waypoint'
import gnu from '../assets/images/home.png'
import academy from '../assets/images/home-academy.png'
import ai from '../assets/images/ai.png'
import blockchain from '../assets/images/blockchain.png'
import offline1 from '../assets/images/offline1.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { helmetMeta } from '../utils/utils'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stickyNav: false }
    this.data = props.data
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gnucoop - Website" 
    meta={helmetMeta({
      title:       'Gnucoop Website',
      description: 'Gnucoop develops mobile and web applications to help aid organisations to easily manage their information and data.',
    })}
	    />
        <Header />
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="who-we-are" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who we are</h2>
                </header>
                <p>
                  Gnucoop develops mobile and web applications to help aid organisations
                  to easily manage their information and data.
                  Gnucoop  started in 2006 as a small group of free-lance IT professionals
                  with the idea that free software and technologies have great economical
                  and technical advantages and they can provide  very useful tools to achieve
                  Companies/Institutions/NGOs/Research Institutes/Aid Agencies’ objectives.
                  In 2012, we officially founded the Gnucoop Soc. Coop., in order to institutionalize
                  our position and provide  a more comprehensive  and recognized expertise and support
                  to our clients, particularly to non profit institutions
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/who-we-are" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={gnu} alt="" />
              </span>
            </div>
          </section>

          <section id="what-we-do" className="main">
            <header className="major">
              <h2>What we do</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image">
                  <img src={ai} alt="" />
                </span>
                <h3>Artificial Intelligence</h3>
                <p>
                  With Artificial Intelligence and Machine Learning we refer to software systems
                  that can perform complex tasks typically associated with “human intelligence”.
                  For example recognizing a face within a picture, understanding a question in
                  natural language or taking decisions.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={blockchain} alt="" />
                </span>
                <h3>Blockchain</h3>
                <p>
                  Blockchain is a technology introduced in 2008 to manage a database of transactions
                  (or a ledger) across a distributed network, assuring a robust and secure synchronization
                  mechanism across nodes that allows to make digital resources impossible to duplicate.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={offline1} alt="" />
                </span>
                <h3>Offline first APP</h3>
                <p>
	                Mobile networks are frequently flaky. In addition people use mobile & web apps on the move.
                  If your app did not have the ability to work well offline, every time your user took a subway
                  or a plane or an Uber your app will potentially lose connectivity leading to a frustrating user experience.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/what-we-do" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          <section id="news" className="main">
            <header className="major">
              <h2>Latest news</h2>
            </header>
            <ul className="features">
            {this.data.allStrapiArticles.edges.map(article => (
              <li key={article.node.id}>
		            <Link to={'/'+article.node.Slug}>
                  <span className="main image">
                    <Img fluid={article.node.FeatureImage.childImageSharp.fluid}/>
                  </span>
                  <h3>{article.node.Title}</h3>
                  <p>{article.node.Excerpt}</p>
                </Link>
              </li>
            ))}
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/blog/1" className="button">
                    All the news 
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="academy" className="main special">
            <header className="major">
              <h2>Gnucoop Academy</h2>
              <p>
                Education is the most powerful weapon which you can use to change the world...
              </p>
            </header>
              <span className="image">
                <img src={academy} alt="" />
              </span>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/training" className="button special">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}


export default Index

export const pageQuery = graphql`
  query HomeQuery {
    allStrapiArticles(
      sort: {
        fields: [PublishDate]
        order: DESC
      }
      limit: 3 
    ) {
      edges {
        node {
          id
          Title
          Slug
          Excerpt
          tags {
            tag
          }
          FeatureImage {
            childImageSharp {
              fluid(maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
