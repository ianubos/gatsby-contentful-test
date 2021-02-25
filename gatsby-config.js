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
    title: 'Gutenberg gatsby template',
    author: 'gutenberg'
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
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
}
