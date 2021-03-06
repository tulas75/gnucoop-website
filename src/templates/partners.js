import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { helmetMeta } from '../utils/utils'

const PartnerPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <header id="header">
      <h1>Partners</h1>
      <p>Our contribution to reach SDG 17</p>
    </header>
    <Helmet title="Gnucoop - Partner" 
    meta={helmetMeta({
      title:       'Gnucoop - Partner',
      description: 'Our contribution to reach SDG 17',
    })}	/>

    <div id="main">
      <section className="main">
        <ul className="features">
          {data.allStrapiPartners.edges.map(partner => (
            <li key={partner.node.id}>
              <a href={'/partner/'+partner.node.Slug} className="undecorated">
                <span className="main image">
	                <Img fixed={partner.node.Logo.childImageSharp.fixed}/>
                </span>
                {partner.node.Excerpt}
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
	        Slug
	        Logo {
            childImageSharp {
              fixed(height:100, width:250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
