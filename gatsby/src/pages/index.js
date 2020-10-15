import React from 'react'
import SEO from '../components/SEO'
import useLatestData from '../utils/useLatestData'

import { HomePageGrid } from '../styles/Grids'
import LoadingGrid from '../components/LoadingGrid'
import ItemGrid from '../components/ItemGrid'

function CurrentySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up</p>
      {!slicemasters && <p>No one is working now!</p>}
      {slicemasters && !slicemasters?.length && <LoadingGrid count={4} />}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  )
}
function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Come on by, by the slice</p>
      {!hotSlices && <p>Nothing' in the case!</p>}
      {hotSlices && !hotSlices?.length && <LoadingGrid count={4} />}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  )
}
export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData()
  return (
    <div className="center">
      <SEO title="Home" />
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  )
}
