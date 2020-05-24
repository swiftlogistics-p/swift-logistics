import * as React from 'react'

import styles from './index.module.scss'
import { Result } from '../track-result/interfaces'
import Spacer from '../spacer'

interface IParcelContent {
  parcel: Result
}

const formatPrice = number =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)

const ParcelContent: React.FC<IParcelContent> = ({ parcel }) => {
  const totalPrice = formatPrice(
    parcel.content.reduce((prev, cur) => {
      return prev + cur.cost
    }, 0)
  )

  const renderContent = () =>
    parcel.content.map(parcelItem => (
      <p key={parcelItem.name} className={styles.p}>
        <span>{parcelItem.name}</span>
        <span>{formatPrice(parcelItem.cost)}</span>
      </p>
    ))

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Parcel details</h2>

      {renderContent()}

      <Spacer height={30} />

      <p className={styles.p}>
        <span>Sent by</span> {parcel.senderName}
      </p>
      <p className={styles.p}>
        <span>Sent on:</span> {parcel.item.sendDate}
      </p>
      <p className={styles.p}>
        <span>Estimated arrival date:</span> {parcel.item.eta}
      </p>

      <Spacer height={30} />

      <p className={styles.p}>
        <span>Receiver:</span> {parcel.receiver.name}
      </p>
      <p className={styles.p}>
        <span>Destination:</span> {parcel.receiver.address}
      </p>

      <p className={styles.price}>Worth of item: {totalPrice}</p>
    </div>
  )
}

export default ParcelContent
