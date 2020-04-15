import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/Nav'
import ReactMarkdown from "react-markdown"  

const StuffTemplate = ({ data }) => (
      <Layout>
        <Nav sticky={true} />
        <Helmet title="Blog & Articles" />
        <div id="main">
          <section id="content" className="main">
          <span className="main image "><Img fluid={data.strapiStuff.header_image.childImageSharp.fluid}/></span>
          <h1>{data.strapiStuff.title}</h1>
	  <ReactMarkdown source={data.strapiStuff.Content} />
	<br/>
	<br/>
	{data.strapiStuff.tags.tag}
	<a class="button special">TAGS:</a> LISTA DEI TAG
          </section>
        </div>
      </Layout>
)

export default StuffTemplate

export const query = graphql`
  query StuffTemplate($slug: String) {
    strapiStuff(slug: {eq: $slug}) {
      title
      Content
      header_image {
          childImageSharp {
            fluid(maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      slug
      tags {
	      tag
	}
    }
  }
`
