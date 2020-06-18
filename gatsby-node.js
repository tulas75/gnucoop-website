/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
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
  return makeRequest(graphql, `
    {
      allStrapiArticles {
        edges {
          node {
            Slug
          }
        }
      }
      allStrapiTags {
        edges {
          node {
            tag
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/blog/' + node.Slug,
        component: path.resolve('src/templates/article.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })
  });
};
