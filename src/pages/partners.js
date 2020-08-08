import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const PartnerPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Partners</h1>
    </header>
    <Helmet title="Gnucoop - Partner" />
    <div id="main">
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

export default PartnerPage 

export const pageQuery = graphql`
  query PartnerQuery {
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
