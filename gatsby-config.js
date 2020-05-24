require('dotenv').config({
  path: `.env`,
})

/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Swift Logistics`,
    description: `Expedited freight services`,
  },
  plugins: [
    // Enable SASS support
    `gatsby-plugin-sass`,

    // Add content to <head> element
    `gatsby-plugin-react-helmet`,

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATBSY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: process.env.GATSBY_TAWK_ID,
      },
    },
  ],
}
