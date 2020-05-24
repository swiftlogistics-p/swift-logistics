export const parcel = {
  item: {
    code: 'MQS-72-KYV',
    price: 206000,
    sendDate: '25th May, 2020',
    eta: '29th May, 2020',
    currentLocation: {
      lat: 55.7558,
      lng: 37.6173,
      status: 'in-transit',
    },
  },
  content: [
    { name: '24k Diamond Ring', cost: 150000 },
    { name: '18k Diamond Bracelet', cost: 50000 },
    { name: 'Cash (USD)', cost: 56000 },
  ],
  senderName: 'Mark Schaefer',
  history: [
    {
      idx: 2,
      code: 'MOS',
      comment: 'Sent to sorting hub',
      date: '25th May, 2020',
      location: 'Moscow, Ukraine',
    },
    {
      idx: 1,
      code: 'KYV',
      comment: 'Picked up for delivery',
      date: '25th May, 2020',
      location: 'Kyiv, Ukraine',
    },
  ],
}

const trip = [
  {
    code: 'KYV',
    comment: 'Picked up for delivery',
    date: '25th May, 2020',
    location: 'Kyiv, Ukraine',
  },
  {
    code: 'MOS',
    comment: 'Sent to sorting hub',
    date: '25th May, 2020',
    location: 'Moscow, Ukraine',
  },
  {
    code: 'BHN',
    comment: 'Package at regional warehouse',
    date: '27th May, 2020',
    location: 'Bremerhaven, Germany',
  },
]

export const example = {
  item: {
    code: 'LLS-1109-NY',
    price: 2000000,
    sendDate: '25th May, 2020',
    eta: '3rd June, 2020',
    currentLocation: {
      lat: 0.0,
      lng: 0.0,
      text: 'current location',
      status: 'in-transit',
    },
  },
  senderName: 'John Doe',
  history: [
    {
      code: 'WAS',
      comment: 'Picked up for delivery',
      date: '25th May, 2020',
      location: 'Washington DC, United States',
    },
  ],
}
