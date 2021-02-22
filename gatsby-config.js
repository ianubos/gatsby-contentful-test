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
    title: 'full-stack bootcamp',
    author: 'dragon'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: spaceid,
        accessToken: accesstoken
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`
      }
    },
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
