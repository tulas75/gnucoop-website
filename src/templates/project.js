import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { formatDateEu } from '../utils/utils'

const ProjectTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - '+data.strapiProjects.Project} />
    <div id="main">
      <section id="content" className="main">
        <span className="main image ">
          <Img fluid={data.strapiProjects.FeatureImage.childImageSharp.fluid}/>
        </span>
        <h1>{data.strapiProjects.Project}</h1>
	      <ReactMarkdown source={data.strapiProjects.Content} />
	      <br/>
      </section>
    </div>
  </Layout>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($Slug: String) {
    strapiProjects(Slug: {eq: $Slug}) {
      Project 
      Content
      FeatureImage {
        childImageSharp {
          fluid(maxHeight: 450, maxWidth: 1160 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Slug
    }
  }
`