import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const SolutionPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Solutions</h1>
      <p>Sustenible technlogical goals</p>
    </header>
    <Helmet title="Gnucoop - Solutions" />
    <div id="main">
      <section class="main">
        <ul class="features">
          {data.allStrapiSolutions.edges.map(solution => (
            <li key={solution.node.id}>
              <a href={'/solution/'+solution.node.Slug}>
                <h2>{solution.node.Solution}</h2>
                <span className="main image">
                  {solution.node.Excerpt}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default SolutionPage 

export const pageQuery = graphql`
  query SolutionQuery {
    allStrapiSolutions {
      edges {
        node {
          id
          Solution 
          Excerpt
	  Slug
        }
      }
    }
  }
`
