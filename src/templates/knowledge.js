import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { helmetMeta } from '../utils/utils'

const KnowledgeTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Knowledge: '+data.strapiKnowledges.Knowledge}
    meta={helmetMeta({
      title:       'Gnucoop - Knowledge: '+data.strapiKnowledges.Knowledge,
      description: data.strapiKnowledges.Excerpt.substring(0, 160),
    })}/>
    <header id="header">
      <h1>{data.strapiKnowledges.Knowledge}</h1>
	<p> &lt; <Link to="/knowledge">Knowlegde</Link> &gt; </p>
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
      Excerpt
      Content
    }
  }
`
