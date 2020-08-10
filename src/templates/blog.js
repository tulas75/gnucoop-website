import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import { formatDateEu } from '../utils/utils'

// Takes all articles, returns the slice of articles for this blog page.
function sliceArticles(a, pageContext) {
  const p = pageContext.page;
  const n = pageContext.articlesPerPage;
  return a.slice((p-1)*n, Math.min(p*n, a.length));
}

const BlogTemplate = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title="Gnucoop - Blog & Articles" />
    <header id="header">
      <h1>Blog & Articles</h1>
      <p>News from us</p>
    </header>
    <div id="main">
      <section className="main">
        <ul className="features">
          {sliceArticles(data.allStrapiArticles.edges, pageContext).map(article => (
            <li key={article.node.id}>
              <a href={'/'+article.node.Slug}>
                <span className="main image">
                  <Img fixed={article.node.FeatureImage.childImageSharp.fixed}/>
                </span>
                {formatDateEu(article.node.PublishDate)}<br />
                {article.node.Title}
              </a>
            </li>
          ))}
        </ul>
        <br/>
	      <button className="button special" style={{cursor:'default'}}>PAGES:</button>
        &nbsp;&nbsp;&nbsp;
        {pageNavigation(pageContext)}
      </section>
    </div>
  </Layout>
)

function pageNavigation(pageContext) {
  const nav = [pageContext.page === 1 ? <b>1</b> : <a href="/blog/1">1</a>];
  for (let p = 2; p <= pageContext.numPages; p++) {
    if (p === pageContext.page) {
      nav.push(
        <span>, <b>{p}</b></span>
      );
    } else {
      nav.push(
        <span>, <a href={'/blog/'+p}>{p}</a></span>
      );
    }
  }
  return nav;
}

export default BlogTemplate 

export const query = graphql`
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
