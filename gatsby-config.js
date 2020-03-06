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
      resolve: 'gatsby-source-strapi',
      options: {
        //apiURL: 'https://aqueous-ridge-60181.herokuapp.com',
	apiURL: 'http://localhost:1337',
	//apiURL: 'http://34.65.138.187',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'stuff',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
