import * as React from 'react'

import Layout from '../../layout'
import TrackForm from '../../components/track-form'
import TrackResult from '../../components/track-result'
import PartnersBanner from '../../components/partners-banner'

import { parcel } from '../../components/track-result/parcel'

import { Result } from '../../components/track-result/interfaces'

const { useState } = React

const results = { 'LLS-1109-NY': parcel }

const TrackPage = ({ location }) => {
  const [item, setItem] = useState<Result | null | 'not found'>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (code: string) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      const result = results[code.toUpperCase()]

      if (!result) {
        setItem('not found')
        setIsLoading(false)
        return
      }

      setItem(result)
      setIsLoading(false)
    }, 900)
  }

  const defaultTrackingCode =
    location && location.state ? location.state.trackingCode : ''

  return (
    <Layout title="Track your parcel">
      <TrackForm
        defaultCode={defaultTrackingCode}
        handleSubmit={handleSubmit}
      />

      <TrackResult result={item} isLoading={isLoading} />

      <PartnersBanner />
    </Layout>
  )
}

export default TrackPage
