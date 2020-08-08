import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const SolutionTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Solution: '+data.strapiSolutions.Solution} />
    <header id="header">
      <h1>{data.strapiSolutions.Solution}</h1>
      <p></p>
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
  query SolutionTemplate($Solution: String) {
    strapiSolutions(Solution: {eq: $Solution}) {
      Solution
      Content
    }
  }
`
