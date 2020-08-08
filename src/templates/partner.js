import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const PartnerTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Partner: '+data.strapiPartners.Partner} />
    <header id="header">
      <h1>{data.strapiPartners.Partner}</h1>
      <p></p>
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
  query PartnerTemplate($Partner: String) {
    strapiPartners(Partner: {eq: $Partner}) {
      Partner
      Content
      Logo {
            childImageSharp {
              fixed(width: 500, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
    }
  }
`
