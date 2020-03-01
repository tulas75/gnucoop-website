import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/Nav'

const StuffTemplate = ({ data }) => (
      <Layout>
        <Nav sticky={true} />
        <Helmet title="Blog & Articles" />
        <div id="main">
          <section id="content" className="main">
          <span className="main image "><Img fluid={data.strapiStuff.header_image.childImageSharp.fluid}/></span>
          <h1>{data.strapiStuff.title}</h1>
	  {data.strapiStuff.Content}
	<br/>
	<br/>
<a class="button special">TAG1</a>  <a class="button">TAG2</a> <a class="button">TAG3</a> 
          </section>
        </div>
      </Layout>
)

export default StuffTemplate

export const query = graphql`
  query StuffTemplate($id: String!) {
    strapiStuff(id: {eq: $id}) {
      title
      Content
      header_image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
  }
`
