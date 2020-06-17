export const parcel = {
  item: {
    code: 'MQS-72-KYV',
    price: 206000,
    sendDate: '25th May, 2020',
    eta: '29th May, 2020',
    currentLocation: {
      lat: 53.5396,
      lng: 8.5809,
      status: 'delayed',
    },
  },
  content: [
    { name: '24k Diamond Ring', cost: 150000 },
    { name: '18k Diamond Bracelet', cost: 50000 },
    { name: 'Cash (USD)', cost: 56000 },
  ],
  senderName: 'Mark Schaefer',
  receiver: {
    name: 'Nancy Ashley',
    address: 'Abbeville, South Carolina, US',
  },
  history: [
    {
      idx: 3,
      code: 'BRE',
      comment: 'Package delayed at warehouse',
      date: '25th May, 2020',
      location: 'Bremen, Germany',
    },
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

export const iphone = {
  item: {
    code: 'YTD-77-PLL',
    price: 972.25,
    sendDate: '10th June, 2020',
    eta: '29th June, 2020',
    currentLocation: {
      lat: 40.7357,
      lng: 74.1724,
      status: 'in transit',
    },
  },
  content: [
    { name: 'iPhone XS Max', cost: 972.25 },
  ],
  senderName: 'Amazon inc.',
  receiver: {
    name: 'Leo Otega',
    address: 'Benin city, Nigeria',
  },
  history: [
    {
      idx: 2,
      code: 'NEW',
      comment: 'Package delivered to sorting hub',
      date: '15th June, 2020',
      location: 'Newark, United States',
    },
    {
      idx: 1,
      code: 'NYU',
      comment: 'Picked up for delivery',
      date: '10th June, 2020',
      location: 'New York, United States',
    },
  ],
}

