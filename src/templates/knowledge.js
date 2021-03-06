import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { helmetMeta } from '../utils/utils'

const KnowledgeTemplate = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <Helmet title={'Gnucoop - Knowledge: '+data.strapiKnowledges.Knowledge}
    meta={helmetMeta({
      title:       'Gnucoop - Knowledge: '+data.strapiKnowledges.Knowledge,
      description: data.strapiKnowledges.Excerpt,
    })}/>
    <header id="header">
      <h1>{data.strapiKnowledges.Knowledge}</h1>
	    <p> &lt; <Link to="/knowledge">Knowlegde</Link> &gt; </p>
    </header>
    <div id="main">
      <section id="content" className="main">
		        <ReactMarkdown source={data.strapiKnowledges.Content} />
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
