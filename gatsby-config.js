module.exports = {
  siteMetadata: {
    title: "gnucoop.com website",
    author: "Gnucoop Soc. Coop.",
    siteUrl: "https://www.gnucoop.com/",
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
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-10623856-3", 
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: true, 
        // Optional parameter - Configuration for react-ga and google analytics 
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 10
            }
        }
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ],
}
