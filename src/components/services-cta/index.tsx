import * as React from 'react'
import styles from './services-cta.module.scss'
import { Link } from 'gatsby'

const ServiceCTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.h2}>Bespoke Logistics Solutions</h2>

        <p className={styles.p}>
          A comprehensive suite of services drawing on our global scale and
          expertise to satisfy custom logistics need across your entire supply
          chain.
        </p>

        <Link className={styles.link} to="/contact-us">
          Contact us
        </Link>
      </div>

      <div className={styles.box}>
        <h2 className={styles.h2}>
          Parcels, Documents, &amp; International Mail Shipments
        </h2>

        <p className={styles.p}>
          Pick up and delivery services for parcels, documents an lightweight
          goods. Large volume international postal services for business
          customers.
        </p>

        <Link className={styles.link} to="/services/air-freight">
          View our air freight services
        </Link>
      </div>
    </section>
  )
}

export default ServiceCTA
