import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { formatDateEu } from '../utils/utils'

const TrainingTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - '+data.strapiTraining.Training} />
    <div id="main">
      <section id="content" className="main">
        <span className="main image ">
          <Img fluid={data.strapiTraining.FeatureImage.childImageSharp.fluid}/>
        </span>
        <h1>{data.strapiTraining.Training}</h1>
	      <ReactMarkdown source={data.strapiTraining.Content} />
	      <br/>
      </section>
    </div>
  </Layout>
)

export default TrainingTemplate

export const query = graphql`
  query TrainingTemplate($Slug: String) {
    strapiTraining(Slug: {eq: $Slug}) {
      Training 
      Content
      FeatureImage {
        childImageSharp {
          fluid(maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Slug
    }
  }
`
