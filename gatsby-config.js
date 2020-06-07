const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'kedro-dev',
    description:
      'Community page for kedro',
    author: '@_waylonwalker',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        extensions: [`.mdx`, `.md`],
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
        // plugins: [`gatsby-remark-images`],
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 1035,
        //       sizeByPixelDensity: true,
        //     }
        //   }
        // ]
      },
    },
    // {
    //   resolve: 'gatsby-remark-images',
    //   options: {
    //     maxWidth: 1035,
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kedro_icon_no-type_blackbg.png', // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `titillium web`,
        ],
        display: 'swap'
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
