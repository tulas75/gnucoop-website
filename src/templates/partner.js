import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const PartnerTemplate = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <Helmet title={'Gnucoop - Partner: '+data.strapiPartners.Partner} />
    <header id="header">
      <h1>{data.strapiPartners.Partner}</h1>
	    <p> &lt; <Link to="/partners">Partners</Link> &gt; </p>
    </header>
    <div id="main">
      <section id="content" className="main">
        <div className="spotlight">
          <div className="content">
		        <ReactMarkdown source={data.strapiPartners.Content} />
          </div>
          <span >
		        <Img fixed={data.strapiPartners.Logo.childImageSharp.fixed}/>
          </span>
        </div>
      </section>
    </div>
  </Layout>
)

export default PartnerTemplate

export const query = graphql`
  query PartnerTemplate($Slug: String) {
    strapiPartners(Slug: {eq: $Slug}) {
      Partner
      Slug
      Content
      Logo {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
