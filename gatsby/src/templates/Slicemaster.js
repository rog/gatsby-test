import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import SEO from '../components/SEO'

const SlicemasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

export default function SlicemasterPage({ data }) {
  return (
    <>
      <SEO
        title={`Slicemaster ${data.person.name}`}
        image={data.person.image.asset.src}
      />
      <SlicemasterGrid>
        <Img fluid={data.person.image.asset.fluid} />
        <div>
          <h2 className="mark">{data.person.name}</h2>
          <p>{data.person.description}</p>
        </div>
      </SlicemasterGrid>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
