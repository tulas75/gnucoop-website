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
      <p>Our contribution to reach SDG 17</p>
    </header>
    <Helmet title="Gnucoop - Partner" />
    <div id="main">
      <section className="main">
        <ul className="features">
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
