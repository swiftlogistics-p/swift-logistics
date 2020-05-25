import * as React from 'react'
import { Link } from 'gatsby'

import Timeline from '../timeline'

import { Result } from '../track-result/interfaces'

import styles from './index.module.scss'

interface ParcelHistoryProps {
  parcel: Result
}

const ParcelHistory: React.FC<ParcelHistoryProps> = ({ parcel }) => {
  const parcelStatus = parcel.item.currentLocation.status

  const renderParcelHistory = () =>
    parcel.history
      .sort((a, b) => (a.idx > b.idx ? -1 : a.idx < b.idx ? 1 : 0))
      .map((historyItem, i) => {
        const isDelayed = parcelStatus === 'delayed' && i === 0

        return (
          <div
            className={isDelayed ? styles.historyDelayed : styles.history}
            key={historyItem.code}
          >
            <Timeline
              index={i}
              length={parcel.history.length}
              isDelayed={isDelayed}
            />

            <p className={styles.historyComment}>{historyItem.comment}</p>
            <p className={styles.historyLocation}>{historyItem.location}</p>
            <p className={styles.historyDate}>{historyItem.date}</p>

            {isDelayed && (
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
