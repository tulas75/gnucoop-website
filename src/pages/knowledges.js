import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const KnowledgePage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Knowledges</h1>
      <p>Help with mind</p>
    </header>
    <Helmet title="Gnucoop - Knowledges" />
    <div id="main">
      <section className="main">
        <ul className="features">
          {data.allStrapiKnowledges.edges.map(knowledge => (
            <li key={knowledge.node.id}>
              <a href={'/knowledge/'+knowledge.node.Slug}>
                <h2>{knowledge.node.Knowledge}</h2>
                <span className="main image">
                  {knowledge.node.Excerpt}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default KnowledgePage 

export const pageQuery = graphql`
  query KnowledgeQuery {
    allStrapiKnowledges {
      edges {
        node {
          id
          Knowledge 
          Excerpt
	  Slug
        }
      }
    }
  }
`
