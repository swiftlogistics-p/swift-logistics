import * as React from 'react'

import styles from './index.module.scss'
import { Result } from '../track-result/interfaces'

interface IParcelContent {
  parcel: Result
}

const ParcelContent: React.FC<IParcelContent> = ({ parcel }) => {
  const itemPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
  }).format(parcel.item.price)

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Parcel details</h2>

      <p className={styles.p}>Sent by: {parcel.senderName}</p>
      <p className={styles.p}>Sent on: {parcel.item.sendDate}</p>
      <p className={styles.p}>Estimated arrival date: {parcel.item.eta}</p>

      <p className={styles.price}>Worth of item: {itemPrice}</p>
    </div>
  )
}

export default ParcelContent
