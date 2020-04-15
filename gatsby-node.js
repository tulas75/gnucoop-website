/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticles {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  const { createFilePath } = require(`gatsby-source-filesystem`)
  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `blog` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  } 
  // Query for articles nodes to use in creating pages.
  return getArticles;
};
