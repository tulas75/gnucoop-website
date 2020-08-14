import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { formatDateEu, helmetMeta } from '../utils/utils'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - '+data.strapiArticles.Title}
    meta={helmetMeta({
      title:       'Gnucoop - '+data.strapiArticles.Title,
      description: data.strapiArticles.Excerpt.substring(0, 160),
      fixedImage:  data.strapiArticles.FeatureImage.childImageSharp.fixed,
    })}/>
    <div id="main">
      <section id="content" className="main">
        <span className="main image ">
          <Img fluid={data.strapiArticles.FeatureImage.childImageSharp.fluid}/>
        </span>
        <span className="article-date">{formatDateEu(data.strapiArticles.PublishDate)}</span>
        <h1>{data.strapiArticles.Title}</h1>
	      <ReactMarkdown className="article-md" source={data.strapiArticles.Content} />
	      <br/>
	      <br/>
	      <button className="button special" style={{cursor:'default'}}>TAGS:</button>
        {data.strapiArticles.tags.map(t => (
          <span>&nbsp;&nbsp;&nbsp;<a href={'/tag/'+t.tag}>{t.tag}</a></span>
        ))}
      </section>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($Slug: String) {
    strapiArticles(Slug: {eq: $Slug}) {
      Title
      Content
      FeatureImage {
        childImageSharp {
          fluid(maxHeight: 450, maxWidth: 1160) {
            ...GatsbyImageSharpFluid
          }
          fixed(width:1080) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Slug
      PublishDate
      Excerpt
      tags {
	      tag
	    }
    }
  }
`
