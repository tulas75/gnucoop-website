module.exports = {
  siteMetadata: {
    title: "gnucoop.com website",
    author: "Gnucoop",
    description: "Gnucoop Gatsby.js Site based on Stellar by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
        endpoint: 'https://gnucoop.us6.list-manage.com/subscribe/post?u=71acfabcdb13506c540dce2cb&amp;id=9af92b1e0f', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://webdata.gnucoop.io',
        // apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'articles',
          'knowledges',
          'partners',
          'products',
          'projects',
          'solutions',
          'tags',
          'team',
          'training',
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gnucoop website',
        short_name: 'GnucoopWeb',
        start_url: '/',
        background_color: '#20547f',
        theme_color: '#20547f',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },

    {
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
             // 1 query for each data type
            query: `
            {
                allStrapiArticles {
                    edges {
                        node {
                            id
			    Title
                            Slug
                        }
                    }
                }
            }`,
            mapping: {
                // Each data type can be mapped to a predefined sitemap
                // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
                // The default sitemap - if none is passed - will be pages
                allStrapiArticles: {
                    sitemap: `posts`,
                },
            },
            exclude: [
                `/dev-404-page`,
                `/404`,
                `/404.html`,
                `/offline-plugin-app-shell-fallback`,
                `/my-excluded-page`,
                /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
            ],
            createLinkInHead: true, // optional: create a link in the `<head>` of your site
            addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
            additionalSitemaps: [ // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
                {
                    url: `/sitemap-posts.xml`,
                },
                {
			url: `https://unruffled-dubinsky-a6c0b8.netlify.app//sitemap.xml`,
                },
            ],
        }
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
