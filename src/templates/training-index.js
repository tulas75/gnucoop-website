import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { helmetMeta } from '../utils/utils'

const TrainingPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <header id="header">
      <h1>Our training</h1>
      <p>Education is the most powerful weapon<br/>which you can use to change the world</p>
    </header>
    <Helmet title="Gnucoop - Training"
    meta={helmetMeta({
      title:       'Gnucoop - Training',
      description: 'Education is the most powerful weapon which you can use to change the world',
    })}/>
    <div id="main">
      <section id="content" className="main">
        <ul className="features">
        {data.allStrapiTraining.edges.map(training => (
          <li key={training.node.id}>
	          <a href={'/training/'+training.node.Slug} className="undecorated">
              <span className="main image">
                <Img fluid={training.node.FeatureImage.childImageSharp.fluid}/>
              </span>
              <strong>{training.node.Training}</strong>
		        </a>
          </li>
        ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default TrainingPage 

export const pageQuery = graphql`
  query TrainingQuery {
    allStrapiTraining {
      edges {  
        node {
          id
          Training
          Slug
          FeatureImage {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
