import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { helmetMeta } from '../utils/utils'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const TrainingTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - '+data.strapiTraining.Training}
    meta={helmetMeta({
      title:       'Gnucoop - '+data.strapiTraining.Training,
      description: data.strapiTraining.Excerpt,
      fixedImage:  data.strapiTraining.FeatureImage.childImageSharp.fixed,
    })}/>

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
          fluid(maxWidth: 1160 ,maxHeight: 450) {
            aspectRatio
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
