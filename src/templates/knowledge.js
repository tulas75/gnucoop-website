import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const KnowledgeTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Knowledge: '+data.strapiKnowledges.Knowledge} />
    <header id="header">
      <h1>{data.strapiKnowledges.Knowledge}</h1>
      <p></p>
    </header>
    <div id="main">
              <section id="content" className="main">
            <div className="spotlight">
              <div className="content">
		  <ReactMarkdown source={data.strapiKnowledges.Content} />
              </div>
              <span >
              </span>
            </div>
          </section>
	
    </div>
  </Layout>
)

export default KnowledgeTemplate

export const query = graphql`
  query KnowledgeTemplate($Slug: String) {
    strapiKnowledges(Slug: {eq: $Slug}) {
      Knowledge
      Content
    }
  }
`
