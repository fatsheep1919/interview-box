const testBoxData = [
  {
    boxInfo: {
      id: 1,
      name: 'test',
      description: 'description of this box',
      tags: ['Event', 'Festival', 'General'],
      price: '₦1,450.00',
    },
    commodities: [
      {
        id: 11,
        orderDate: '12 Aug 2022 - 12:25 am',
        unboxLogic: 'Home Delivery',
        unitPrice: '₦25,000.00',
        qty: '2',
        discount: '₦0.00',
        orderTotal: '₦50,000.00',
      },
      {
        id: 12,
        orderDate: '12 Sept 2022 - 15:05 am',
        unboxLogic: 'Home Delivery',
        unitPrice: '₦2,000.00',
        qty: '1',
        discount: '₦0.00',
        orderTotal: '₦2,000.00',
      },
      {
        id: 13,
        orderDate: '28 Sept 2022 - 19:12 am',
        unboxLogic: 'Home Delivery',
        unitPrice: '₦5,000.00',
        qty: '1',
        discount: '₦10.00',
        orderTotal: '₦4,990.00',
      }
    ]
  },
  {
    boxInfo: {
      id: 2,
      name: 'error',
      description: 'this box has no commodities, in detail drawer the commodities table will show an error message',
      tags: ['Event', 'Festival'],
    },
  }
];

export {
  testBoxData,
}