import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { helmetMeta } from '../utils/utils'

const SolutionTemplate = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <Helmet title={'Gnucoop - Solution: '+data.strapiSolutions.Solution} 
    meta={helmetMeta({
      title:       'Gnucoop - Solution: '+data.strapiSolutions.Solution,
      description: data.strapiSolutions.Excerpt,
    })}/>
    <header id="header">
      <h1>{data.strapiSolutions.Solution}</h1>
	    <p> &lt; <Link to="/solutions">Solutions</Link> &gt; </p>
    </header>
    <div id="main">
      <section id="content" className="main">
		        <ReactMarkdown source={data.strapiSolutions.Content} />
      </section>
    </div>
  </Layout>
)

export default SolutionTemplate

export const query = graphql`
  query SolutionTemplate($Slug: String) {
    strapiSolutions(Slug: {eq: $Slug}) {
      Solution
      Excerpt
      Content
    }
  }
`
