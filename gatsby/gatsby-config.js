// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv'
dotenv.config({ path: '.env'})

export default {
    siteMetadata: {
        title: 'Slick Slices',
        siteUrl: 'http://slices.rog',
        description: 'Best Pizza Hamilton'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
              projectId: process.env.SANITY_PROJECT_ID,
              dataset: process.env.SANITY_DATASET,
              token: process.env.SANITY_TOKEN
            }
        }
    ]
}