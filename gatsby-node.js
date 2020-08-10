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
      allStrapiPartners {
        edges {
          node {
            Partner
          }
        }
      }
      allStrapiProducts {
        edges {
          node {
            Slug
          }
        }
      }
      allStrapiProjects {
        edges {
          node {
            Slug
          }
        }
      }
      allStrapiSolutions {
        edges {
          node {
            Slug
          }
        }
      }
      allStrapiKnowledges {
        edges {
          node {
            Slug
          }
        }
      }
      allStrapiTraining {
        edges {
          node {
            Slug
          }
        }
      }
    }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/' + node.Slug,
        component: path.resolve('src/templates/article.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })
    // Create blog pages.
    const articlesPerPage = 24;
    const numPages = Math.max(1,
      Math.ceil(result.data.allStrapiArticles.edges.length / articlesPerPage)
    );
    for (let p = 1; p <= numPages; p++) {
      actions.createPage({
        path: '/blog/' + p,
        component: path.resolve('src/templates/blog.js'),
        context: {
          page: p,
          numPages,
         articlesPerPage,
        },
      })
    }
    // Create pages for each tag.
    result.data.allStrapiTags.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/tag/' + node.tag,
        component: path.resolve('src/templates/tag.js'),
        context: {
          tag: node.tag,
        },
      })
    })
    // Create pages for each partner.
    result.data.allStrapiPartners.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/partner/' + node.Partner,
        component: path.resolve('src/templates/partner.js'),
        context: {
          Partner: node.Partner,
        },
      })
    })
    // Create pages for each product.
    result.data.allStrapiProducts.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/product/' + node.Slug,
        component: path.resolve('src/templates/product.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })
    // Create pages for each project.
    result.data.allStrapiProjects.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/project/' + node.Slug,
        component: path.resolve('src/templates/project.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })
    // Create pages for each solution.
    result.data.allStrapiSolutions.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/solution/' + node.Slug,
        component: path.resolve('src/templates/solution.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })

    // Create pages for each knowledge.
    result.data.allStrapiKnowledges.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/knowledge/' + node.Slug,
        component: path.resolve('src/templates/knowledge.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })

    // Create pages for each training.
    result.data.allStrapiTraining.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/training/' + node.Slug,
        component: path.resolve('src/templates/training.js'),
        context: {
          Slug: node.Slug,
        },
      })
    })

  });
};
