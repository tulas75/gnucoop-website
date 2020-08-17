import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import { helmetMeta } from '../utils/utils'


const ProductTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Product: '+data.strapiProducts.Product} 
    meta={helmetMeta({
      title:       'Gnucoop - Product: '+data.strapiProducts.Product,
      description: data.strapiProducts.Excerpt,
    })}/>
    <header id="header">
	    <h1>{data.strapiProducts.Product} </h1>
	    <p> &lt; <Link to="/products">Products</Link> &gt; </p>
    </header>
    <div id="main">
      <section id="content" className="main">
        <ReactMarkdown source={data.strapiProducts.Content} />
      </section>
    </div>
  </Layout>
)

export default ProductTemplate

export const query = graphql`
  query ProductTemplate($Slug: String) {
    strapiProducts(Slug: {eq: $Slug}) {
      Slug
      Excerpt
      FeatureImage {
        childImageSharp {
          fluid(maxHeight: 600, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Product
      Content
    }
  }
`
