import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/Nav'

    const BlogPage = ({ data }) => (
      <Layout>
        <Nav sticky={true} />
        <Helmet title="Blog & Articles" />
        <header id="header">
        <h1>Blog & Articles</h1>
        <p>News from us</p>
    </header>
        <div id="main">
        <section class="main">
        <ul class="features">
	  {data.allStrapiStuff.edges.map(document => (
            <li key={document.node.id}>
            <span className="main image"><Img fixed={document.node.feature_image.childImageSharp.fixed}/></span>
                <h3>{document.node.title}</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href={`/${document.node.id}`}>Read more</a>
                    </li>
                </ul>
            </li>
	  ))}
        </ul>
		</section>
        </div>
      </Layout>
    )

export default BlogPage 

export const pageQuery = graphql`
  query BlogQuery {
    allStrapiStuff {
      edges {
        node {
          id
	  feature_image {
	      childImageSharp {
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
	  }
          title
        }
      }
    }
  }
`
