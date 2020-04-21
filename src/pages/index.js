import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import gnu from '../assets/images/gnumeditate.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
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
        <Helmet title="Gnucoop - Website" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who we are</h2>
                </header>
                <p>
                  Gnucoop develops databases and web applications to help aid organisations
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

          <section id="first" className="main special">
            <header className="major">
              <h2>How we can help</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Artificial Intelligence</h3>
                <p>
                  With Artificial Intelligence and Machine Learning we refer to software systems
                  that can perform complex tasks typically associated with “human intelligence”.
                  For example recognizing a face within a picture, understanding a question in
                  natural language or taking decisions.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Blockchain</h3>
                <p>
                  Blockchain is a technology introduced in 2008 to manage a database of transactions
                  (or a ledger) across a distributed network, assuring a robust and secure synchronization
                  mechanism across nodes that allows to make digital resources impossible to duplicate.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Offline first APP</h3>
                <p>
                  Gnucoop usually provides a native mobile application for all the major mobile
                  operating systems (iOS, Android, Windows Phone) assuring a fast performance and
                  a high degree of reliability.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/how-we-can-help" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Our Projects with our Partners</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong> UNHCR</strong> Data collection in refugee Camps
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>CIAI</strong> Cheese2School for School Attendance
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>Save the Children</strong>Data collection for disability
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>CBM</strong>Data collection for visual impaired
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>CUAMM</strong> Data analytis to fight HIV
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/how-we-can-help" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Gnucoop Acadamy</h2>
              <p>
                Education is the most powerful weapon which you can use to change the world...
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://academy.gnucoop.com" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="button">
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
