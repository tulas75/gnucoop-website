import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const TeamPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Who we are</h1>
      <p>Discover Gnucoop Soc. Coop.</p>
    </header>
    <Helmet title="Gnucoop - Who we are" />
    <div id="main">
      <section id="content" className="main">
        <h2>COMPANY STATEMENT</h2>
        <h3>Vision</h3>
          <p>Our vision is to make development projects more effective through the 
          use of free software and sustainable technological solutions.</p>
        <h3>Mission</h3>
          <p>We offer a combination of technical competencies with development skills, in order 
          to give international cooperation projects a better chance to be successful.
          We promote long-term partnerships with other organizations, to strengthen skills 
          and provide technical services in the aid-for-development sector.
          We belong to the Digital humanitarian network and actively participate in the 
          international debate on the use of technology as aid supporting tool, linking up 
          with the international network of aid worker and the international IT community.</p>
        <h3>Guiding principles</h3>
          <p>Innovation, quality and efficiency are necessary elements for the development of 
          technology and the services that we make available through our work.
          The constant support to our partners and clients from project planning to project 
          development contributes to the successful achievement of their objectives.
          Motivation, ability to work in a team and willingness to take over responsibilities 
          are a guarantee for our successful performances.
          Openness, mutual support as well as enjoyment of work for a common goal identify 
          our company.
          The young history, dynamism and flexibility of our organization make of its members 
          the key elements to succeed as a cooperative and to help achieving the important 
          objectives of the international development community.</p>
        <h1>Team</h1>
        <ul class="features">
          {data.allStrapiTeam.edges.map(team => (
            <li key={team.node.id}>
              <span className="main image">
                <Img fixed={team.node.ImageProfile.childImageSharp.fixed}/>
              </span>
              <strong>{team.node.Name}</strong>
              <br/>
              {team.node.Description}
            </li>
          ))}
        </ul>
      </section>

      <section class="main">
        <header className="major">
          <h2>Our partners</h2>
        </header>
        <ul class="features">
          {data.allStrapiPartners.edges.map(partner => (
            <li key={partner.node.id}>
              <a href={'/partner/'+partner.node.Partner}>
                <h2>{partner.node.Partner}</h2>
                <span className="main image">
                  {/*<Img fixed={partner.node.FeatureImage.childImageSharp.fixed}/>*/}
                  {partner.node.Excerpt}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default TeamPage 

export const pageQuery = graphql`
  query TeamQuery {
    allStrapiTeam {
      edges {  
        node {
          id
          Name
          Description
          ImageProfile {
            childImageSharp {
              fixed(width: 260, height: 260) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    allStrapiPartners {
      edges {
        node {
          id
          Partner
          Excerpt
        }
      }
    }
  }
`
