import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const KnowledgePage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Our Knowledge</h1>
      <p>Following hackers' approach</p>
    </header>
    <Helmet title="Gnucoop - Knowledges" />
       <meta name="description" content="testo di descrizione pagina" />
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
