import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import { formatDateEu } from '../utils/utils'

function hasTag(tag) {
  return article => {
    for (const t of article.node.tags) {
      if (t.tag === tag) {
        return true;
      }
    }
    return false;
  }
}

const TagPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title="Blog & Articles" />
    <header id="header">
      <h1>Articles filtered by tag: {pageContext.tag}</h1>
      <p></p>
    </header>
    <div id="main">
      <section class="main">
        <ul class="features">
          {data.allStrapiArticles.edges.filter(hasTag(pageContext.tag)).map(article => (
            <li key={article.node.id}>
              <a href={'/blog/'+article.node.Slug}>
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

export default TagPage 

export const pageQuery = graphql`
  query TagQuery {
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
          tags {
            tag
          }
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
