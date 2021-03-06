import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const SolutionPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <header id="header">
      <h1>Solutions</h1>
      <p>Sustainable technological goal</p>
    </header>
    <Helmet title="Gnucoop - Solutions" />
    <div id="main">
      <section className="main">
        <ul className="features">
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
    allStrapiSolutions (
        sort: {
        fields: [Solution]
        order: ASC 
      }
    ){
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
