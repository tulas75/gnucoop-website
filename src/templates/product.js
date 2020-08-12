import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'

const ProductTemplate = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <Helmet title={'Gnucoop - Product: '+data.strapiProducts.Product} />
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
      Product
      Content
    }
  }
`
