import React from 'react'
import Helmet from 'react-helmet'

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
        {/*<span className="main image ">
          <Img fluid={data.strapiPartners.FeatureImage.childImageSharp.fluid}/>
        </span>*/}
	      <ReactMarkdown source={data.strapiPartners.Content} />
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
    }
  }
`
