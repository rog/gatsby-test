import { useEffect, useState } from 'react'

const gql = String.raw
const deets = `
  _id
  name
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`

export default function useLatestData() {
  const [hotSlices, setHotSlices] = useState([])
  const [slicemasters, setSlicemasters] = useState([])

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              Store
              slicemasters {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices)
        setSlicemasters(res.data.StoreSettings.slicemasters)
      })
  }, [])

  return { hotSlices, slicemasters }
}
