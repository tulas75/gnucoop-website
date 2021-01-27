import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const ProductPage = ({ data, pageContext }) => (
  <Layout>
    <Nav sticky={true} searchData={pageContext.searchData} />
    <header id="header">
      <h1>Our products</h1>
      <p>Gnucoop's tools</p>
    </header>
    <Helmet title="Gnucoop - Our products" />
    <div id="main">
      <section id="content" className="main">
        <ul className="features">
          {data.allStrapiProducts.edges.map(product => (
            <li key={product.node.id}>
              <a href={'/product/'+product.node.Slug}>
                <h2>{product.node.Product}</h2>
                <span className="main image">
                  {/*<Img fixed={product.node.FeatureImage.childImageSharp.fixed}/>*/}
                  {product.node.Excerpt}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default ProductPage 

export const pageQuery = graphql`
  query ProductQuery {
    allStrapiProducts {
      edges {	
	      node {
          id
          Product
          Slug
		      Excerpt
          FeatureImage {
            childImageSharp {
              fixed(width: 260, height: 260) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
	  }
  }
`
