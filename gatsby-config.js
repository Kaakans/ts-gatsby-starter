module.exports = {
  siteMetadata: {
    title: 'default-title',
    description: 'default-description',
    keywords: '',
    siteUrl: '',
    author: {
      name: 'Jonathan Boellke',
      url: 'https://github.com/Kaakans',
      email: 'jonathanboellke@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
