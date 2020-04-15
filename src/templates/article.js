import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/Nav'
import ReactMarkdown from "react-markdown"  

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title="Blog & Articles" />
    <div id="main">
      <section id="content" className="main">
        <span className="main image ">
          <Img fluid={data.strapiArticles.header_image.childImageSharp.fluid}/>
        </span>
        <h1>{data.strapiArticles.title}</h1>
	      <ReactMarkdown source={data.strapiArticles.Content} />
	      <br/>
	      <br/>
	      {data.strapiArticles.tags.tag}
	      <a class="button special">TAGS:</a> LISTA DEI TAG
      </section>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String) {
    strapiArticles(slug: {eq: $slug}) {
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
