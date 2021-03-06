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
            Title
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
            Slug
          }
        }
      }
      allStrapiProducts {
        edges {
          node {
            Slug
            Product
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
            Solution
          }
        }
      }
      allStrapiKnowledges {
        edges {
          node {
            Slug
            Knowledge
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
    const searchData = (
      result.data.allStrapiArticles.edges.map(article => ({
        key: article.node.Title,
        url: '/'+article.node.Slug,
      }))
    ).concat(
      result.data.allStrapiProducts.edges.map(product => ({
        key: product.node.Product,
        url: '/product/' + product.node.Slug,
      }))
    ).concat(
      result.data.allStrapiSolutions.edges.map(solution => ({
        key: solution.node.Solution,
        url: '/solution/' + solution.node.Slug,
      }))
    ).concat(
      result.data.allStrapiKnowledges.edges.map(knowledge => ({
        key: knowledge.node.Knowledge,
        url: '/knowledge/' + knowledge.node.Slug,
      }))
    )

    // Create static pages.
    // Normally, these pages would go in the "pages" folder,
    // but we need to pass them data for the search bar in nav.
    const staticPages = {
      '404':        'src/templates/404.js',
      '/':          'src/templates/index.js',
      knowledge:    'src/templates/knowledge-index.js',
      partners:     'src/templates/partners.js',
      privacy:      'src/templates/privacy.js',
      products:     'src/templates/products.js',
      solutions:    'src/templates/solutions.js',
      training:     'src/templates/training-index.js',
      'what-we-do': 'src/templates/what-we-do.js',
      'who-we-are': 'src/templates/who-we-are.js',
    }
    for (let key in staticPages) {
      actions.createPage({
        path: key,
        component: path.resolve(staticPages[key]),
        context: { searchData },
      })
    }

    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/' + node.Slug,
        component: path.resolve('src/templates/article.js'),
        context: {
          Slug: node.Slug,
          searchData,
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
          searchData,
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
          searchData,
        },
      })
    })
    // Create pages for each partner.
    result.data.allStrapiPartners.edges.forEach(({ node }) => {
      actions.createPage({
        path: '/partner/' + node.Slug,
        component: path.resolve('src/templates/partner.js'),
        context: {
          Slug: node.Slug,
          searchData,
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
          searchData,
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
          searchData,
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
          searchData,
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
          searchData,
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
          searchData,
        },
      })
    })

  });
};
