import * as React from 'react'

// components
import Loader from '../loader'
import TrackingEmpty from '../tracking-empty'
import Map from '../map'

// images
// import mapImg from '../../assets/images/paris-map.png'

// interfaces
import { Result } from './interfaces'

// styles
import styles from './index.module.scss'
import ParcelHistory from '../parcel-history'
import ParcelContent from '../parcel-content'

export interface TrackResultProps {
  result: Result | null | 'not found'
  isLoading: boolean
}

const TrackResult: React.FC<TrackResultProps> = ({ result, isLoading }) => {
  if (isLoading) return <Loader />

  if (result === null || result === 'not found')
    return <TrackingEmpty type={result} />

  return (
    <>
      <div className={styles.mapContainer}>
        <Map location={result.item.currentLocation} />
      </div>

      <section className={styles.container}>
        <ParcelHistory parcel={result} />

        <ParcelContent parcel={result} />
      </section>
    </>
  )
}

export default TrackResult
