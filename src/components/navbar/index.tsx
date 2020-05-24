import * as React from 'react'
import { Link, navigate } from 'gatsby'

// components
import Hamburger from '../hamburger'
import SecondaryMenu from './SecondaryMenu'

// images
import logoImg from '../../assets/images/logo.png'

// icons
import LogoIcon from '../../assets/icons/LogoIcon'
import ArrowDown from '../../assets/icons/ArrowDownIcon'
import SearchIcon from '../../assets/icons/SearchIcon'

// style
import styles from './navbar.module.scss'
import useNoScroll from './useNoScroll'

const services = [
  { name: 'Air Freight', url: '/services/air-freight' },
  { name: 'Ocean Freight', url: '/services/ocean-freight' },
  { name: 'Road Freight', url: '/services/road-freight' },
]

const { useState } = React

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const [trackingInput, setTrackingInput] = useState('')

  useNoScroll(isMenuOpen)

  const handleMenuToggle = () => {
    toggleMenu(!isMenuOpen)
  }

  const handleTrackingInputSubmit = e => {
    e.preventDefault()

    navigate('/track', { state: { trackingCode: trackingInput } })
  }

  return (
    <nav className={styles.nav}>
      <Link aria-label="Go home" to="/" className={styles.logo}>
        <img alt="Home button" src={logoImg} style={{ height: 30 }} />
      </Link>

      <Hamburger isPressed={isMenuOpen} onClick={handleMenuToggle} />

      <ul
        className={`${styles.navMenu} ${
          isMenuOpen && styles.navMenuVisible
        }`.trim()}
      >
        <li className={styles.navMenuItem}>
          <Link className={styles.navMenuLink} to="/about">
            About us
          </Link>
        </li>

        <li className={`${styles.navMenuItem} ${styles.navMenuItemSecondary}`}>
          <Link className={styles.navMenuLink} to="/">
            Services <ArrowDown className={styles.arrowDown} />
          </Link>

          <SecondaryMenu services={services} />
        </li>

        <li className={styles.navMenuItem}>
          <Link className={styles.navMenuLink} to="/contact-us">
            Contact us
          </Link>
        </li>

        <li className={styles.navMenuItem}>
          <SearchIcon className={styles.searchIcon} />

          <form onSubmit={handleTrackingInputSubmit}>
            <input
              className={styles.trackInput}
              type="text"
              placeholder="Tracking code"
              value={trackingInput}
              onChange={e => setTrackingInput(e.target.value)}
            />
          </form>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
