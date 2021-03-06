import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import whoweare from '../assets/images/who-we-are.png'
import { helmetMeta } from '../utils/utils'

const TeamPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <header id="header">
      <h1>Who we are</h1>
      <p>Discover Gnucoop Soc. Coop.</p>
    </header>
    <Helmet title="Gnucoop - Who we are" 
    meta={helmetMeta({
      title:       'Gnucoop - Who we are',
      description: 'We offer a combination of technical competencies with development skills, in order to give international cooperation projects a better chance to be successful',
    })}/>
    <div id="main">
      <section id="content" className="main">
	      <div className="spotlight">
          <div className="content">
            <h3>Vision</h3>
            <p>
              Our vision is to make development projects more effective through the
              use of free software and sustainable technological solutions.
            </p>
            <h3>Mission</h3>
            <p>
              We offer a combination of technical competencies with development skills, in order
              to give international cooperation projects a better chance to be successful.
              We promote long-term partnerships with other organizations, to strengthen skills
              and provide technical services in the aid-for-development sector.
              We belong to the Digital humanitarian network and actively participate in the
              international debate on the use of technology as aid supporting tool, linking up
              with the international network of aid worker and the international IT community.
            </p>
          </div>
          <span className="image">
            <img src={whoweare} alt="" />
          </span>
        </div>
        <h3>Guiding principles</h3>
        <p>
          Innovation, quality and efficiency are necessary elements for the development of 
          technology and the services that we make available through our work.
          The constant support to our partners and clients from project planning to project 
          development contributes to the successful achievement of their objectives.
          Motivation, ability to work in a team and willingness to take over responsibilities 
          are a guarantee for our successful performances.
          Openness, mutual support as well as enjoyment of work for a common goal identify 
          our company.
          The young history, dynamism and flexibility of our organization make of its members 
          the key elements to succeed as a cooperative and to help achieving the important 
          objectives of the international development community.
        </p>
    	</section>
	    <section id="content" className="main">
        <h1>Team</h1>
        <ul className="features">
        {data.allStrapiTeam.edges.map(team => (
          <li key={team.node.id}>
            <span className="main image">
              <Img fluid={team.node.ImageProfile.childImageSharp.fluid}/>
            </span>
            <strong>{team.node.Name}</strong>
            <br/>
		        <i>{team.node.Role}</i>
            <br/>
            {team.node.Description}
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
    allStrapiTeam (
        sort: {
        fields: [strapiId]
        order: ASC
      }
    ){
      edges {  
        node {
          id
          Name
          Description
	        Role
          ImageProfile {
            childImageSharp {
              fluid(maxWidth: 260, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
