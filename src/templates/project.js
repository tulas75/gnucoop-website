import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { helmetMeta } from '../utils/utils'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const ProjectTemplate = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <Helmet title={'Gnucoop - '+data.strapiProjects.Project} 
    meta={helmetMeta({
      title:       'Gnucoop - '+data.strapiProjects.Title,
      description: data.strapiProjects.Excerpt,
      fixedImage:  data.strapiProjects.FeatureImage.childImageSharp.fixed,
    })}/>
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
          fixed(width:1080) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Slug
    }
  }
`
