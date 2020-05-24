export interface Result {
  item: {
    price: number
    sendDate: Date
    eta: Date
    code: string
    currentLocation: {
      lat: number
      lng: number
      status: 'in-transit' | 'delayed'
    }
  }
  content: ResultContent[]
  history: {
    idx: number
    location: string
    code: string
    date: Date
    comment: string
  }[]
  senderName: string
}

interface ResultContent {
  name: string
  cost: number
}
