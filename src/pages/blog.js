import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'

// '2020-12-31' -> '31/12/2020'
function formatDateEu(d) {
  return `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}`;
}

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
          {data.allStrapiArticles.edges.map(article => (
            <li key={article.node.id}>
              <a href={`/${article.node.Slug}`}>
                <span className="main image">
                  <Img fixed={article.node.FeatureImage.childImageSharp.fixed}/>
                </span>
                {formatDateEu(article.node.PublishDate)}<br />
                {article.node.Title}
              </a>
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
    allStrapiArticles(
      sort: {
        fields: [PublishDate]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          Title
          Slug
          PublishDate
          FeatureImage {
            childImageSharp {
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
