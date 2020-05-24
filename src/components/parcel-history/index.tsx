import * as React from 'react'
import { Link } from 'gatsby'

import Timeline from '../timeline'

import { Result } from '../track-result/interfaces'

import styles from './index.module.scss'

interface ParcelHistoryProps {
  parcel: Result
}

const ParcelHistory: React.FC<ParcelHistoryProps> = ({ parcel }) => {
  const renderParcelHistory = () =>
    parcel.history.map((historyItem, i) => {
      const parcelStatus = parcel.item.currentLocation.status

      return (
        <div
          className={
            parcelStatus === 'in-transit'
              ? styles.history
              : styles.historyDelayed
          }
          key={historyItem.code}
        >
          <Timeline
            index={i}
            length={parcel.history.length}
            isDelayed={parcelStatus === 'delayed'}
          />

          <p className={styles.historyComment}>{historyItem.comment}</p>
          <p className={styles.historyLocation}>{historyItem.location}</p>
          <p className={styles.historyDate}>{historyItem.date}</p>

          {parcelStatus === 'delayed' && (
            <small className={styles.delayedText}>
              Please <Link to="/contact-us">contact us</Link> for more info
            </small>
          )}
        </div>
      )
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Parcel History</h2>

      {renderParcelHistory()}
    </div>
  )
}

export default ParcelHistory
