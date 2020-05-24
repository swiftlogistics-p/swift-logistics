export interface Result {
  item: {
    price: number
    sendDate: Date
    eta: Date
    code: string
    currentLocation: {
      lat: number
      lng: number
      text: string
      status: 'in-transit' | 'delayed'
    }
  }
  history: {
    location: string
    code: string
    date: Date
    comment: string
  }[]
  senderName: string
}
