export const promotions = [
  {
    id: 1002,
    title: 'Buy three, get 30 percent off',
    discount_type: 'percentage', // fixed_value
    discount_value: 30,
    application_type: 'specific_products', // specific_categories, specific_brands
    purchase_type: 'one_time', // multiple
    minimum_requirement: 'amount', // qty
    minimum_requirement_value: 3,
    method: 'automatic', // code
    code: '',
    start_date: '2024-04-02',
    start_time: '8:00 PM',
    end_date: '2024-04-12',
    end_time: '8:00 PM',
    status: 'expired',
    products: [
      {
        id: 101,
        name: 'Garbage Bags 10L',
        category: 'Other cleaning items',
        brand: 'Common',
        qty: 10,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
        attribute: '10L',
        price: 32.00,
      },
      {
        id: 102,
        name: 'Garbage Bags 10L',
        category: 'Other cleaning items',
        brand: 'Common',
        qty: 10,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
        attribute: '10L',
        price: 32.00,
      },
    ]
  },
  {
    id: 1003,
    title: 'Buy two, get one free',
    discount_type: 'fixed_value',
    discount_value: 1, // One free product
    application_type: 'specific_products',
    purchase_type: 'one_time',
    minimum_requirement: 'qty',
    minimum_requirement_value: 2,
    method: 'code',
    code: 'B2G1F',
    start_date: '2024-04-02',
    start_time: '8:00 PM',
    end_date: '2024-04-12',
    end_time: '8:00 PM',
    status: 'active',
    products: [
      {
        id: 103,
        name: 'T-Shirt',
        category: 'Clothing',
        brand: 'Any',
        qty: 1,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg', // Replace with a placeholder image
        attribute: 'Size: M',
        price: 25.00,
      },
      {
        id: 104,
        name: 'T-Shirt',
        category: 'Clothing',
        brand: 'Any',
        qty: 1,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg', // Replace with a placeholder image
        attribute: 'Size: L',
        price: 25.00,
      },
    ]
  },
  {
    id: 1004,
    title: 'Spend $50, get 15% off',
    discount_type: 'percentage',
    discount_value: 15,
    application_type: 'specific_categories',
    purchase_type: 'one_time',
    minimum_requirement: 'amount',
    minimum_requirement_value: 50,
    method: 'automatic',
    code: '',
    start_date: '2024-04-03', // Today's date
    start_time: '09:31 PM', // Current time
    end_date: '2024-04-15',
    end_time: '8:00 PM',
    status: 'active',
    products: [], // This promotion applies to all products
  },
  {
    id: 1005,
    title: 'Clearance sale: Up to 70% off!',
    discount_type: 'percentage', // Varied discounts based on product
    discount_value: 0, // Placeholder, actual discount will be set on each product
    application_type: 'specific_categories',
    purchase_type: 'multiple_times',
    minimum_requirement: 'none',
    minimum_requirement_value: 0,
    method: 'automatic',
    code: '',
    start_date: '2024-04-01',
    start_time: '00:00 AM',
    end_date: '2024-04-30',
    end_time: '11:59 PM',
    status: 'sheduled',
    products: [
      {
        id: 105,
        name: 'Winter Jacket',
        category: 'Clothing',
        brand: 'Brand X',
        qty: 10,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg', // Replace with a placeholder image
        attribute: 'Color: Blue',
        price: 100.00,
        discount_value: 50, // Set specific discount for this product
      },
      {
        id: 106,
        name: 'Summer Dress',
        category: 'Clothing',
        brand: 'Brand Y',
        qty: 5,
        status: 'active',
        image: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg', // Replace with a placeholder image
        attribute: 'Size: S',
        price: 30.00,
        discount_value: 20, // Set specific discount for this product
      },
    ]
  }
]