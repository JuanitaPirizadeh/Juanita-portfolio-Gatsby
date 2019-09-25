/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
siteMetadata:{
  title: 'portfolio',
  description: 'my first gatsby built portfolio',
  author: '@JuanitaPirizadeh',
  data: {
    name: "juanita",
    age: 24,
  }
},
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
'gatsby-plugin-styled-components'],
}
