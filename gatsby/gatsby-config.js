import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: 'Slick Slices',
    siteUrl: 'http://slices.rog',
    description: 'Best Pizza Hamilton',
    twitter: '@rog3r',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
