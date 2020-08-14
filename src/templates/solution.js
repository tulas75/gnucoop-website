import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { helmetMeta } from '../utils/utils'

const SolutionTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Solution: '+data.strapiSolutions.Solution} 
    meta={helmetMeta({
      title:       'Gnucoop - Solution: '+data.strapiSolutions.Solution,
      description: data.strapiSolutions.Excerpt,
      imgSrc: 'logo2-21b925cd40c660cc779b268e99627684.png',
    })}/>
    <header id="header">
      <h1>{data.strapiSolutions.Solution}</h1>
	<p> &lt; <Link to="/solutions">Solutions</Link> &gt; </p>
    </header>
    <div id="main">
              <section id="content" className="main">
            <div className="spotlight">
              <div className="content">
		  <ReactMarkdown source={data.strapiSolutions.Content} />
              </div>
              <span >
              </span>
            </div>
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
