/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})
// process.env variables need to be loaded at first and then use
const spaceid = process.env.CONTENTFUL_SPACE_ID
const accesstoken = process.env.CONTENTFUL_ACCESS_TOKEN
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'full-stack bootcamper',
    author: 'dragon'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: spaceid,
        accessToken: accesstoken
      }
    },
    'gatsby-plugin-sass',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
