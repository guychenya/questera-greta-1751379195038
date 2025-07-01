// Mock data for all components
export const analyticsData = {
  revenueData: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data2023: [12500, 13500, 18000, 16500, 21000, 18750, 23000, 24500, 26000, 25000, 27000, 29000],
    data2024: [15000, 17000, 22000, 21000, 25000, 23000, 27000, 28500, 29000, 31000, 32000, 34000]
  },
  trafficSources: [
    { value: 35, name: 'Organic Search' },
    { value: 25, name: 'Direct' },
    { value: 20, name: 'Social Media' },
    { value: 15, name: 'Referral' },
    { value: 5, name: 'Email' }
  ],
  deviceStats: [
    { value: 45, name: 'Mobile' },
    { value: 35, name: 'Desktop' },
    { value: 20, name: 'Tablet' }
  ],
  metrics: [
    {
      title: 'Conversion Rate',
      value: '3.45%',
      trend: '+0.5%',
      color: 'blue'
    },
    {
      title: 'Avg. Order Value',
      value: '$85.20',
      trend: '+$12.40',
      color: 'green'
    },
    {
      title: 'Customer LTV',
      value: '$450',
      trend: '+8%',
      color: 'purple'
    },
    {
      title: 'Cart Abandonment',
      value: '24.7%',
      trend: '-2.3%',
      color: 'yellow'
    },
    {
      title: 'Bounce Rate',
      value: '42.3%',
      trend: '-1.5%',
      color: 'red'
    },
    {
      title: 'Sessions',
      value: '24.5K',
      trend: '+15%',
      color: 'indigo'
    }
  ]
};

export const campaignData = [
  {
    id: 1,
    name: 'Summer Sale 2024',
    type: 'Email',
    status: 'Active',
    reach: '15,000',
    conversion: '2.5%',
    budget: '$1,200',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    performance: 'High'
  },
  {
    id: 2,
    name: 'New Product Launch',
    type: 'Social Media',
    status: 'Scheduled',
    reach: '25,000',
    conversion: '3.2%',
    budget: '$2,500',
    startDate: '2024-07-15',
    endDate: '2024-08-15',
    performance: 'Medium'
  },
  {
    id: 3,
    name: 'Holiday Special',
    type: 'SMS',
    status: 'Draft',
    reach: '10,000',
    conversion: '0%',
    budget: '$800',
    startDate: '2024-12-01',
    endDate: '2024-12-25',
    performance: 'Pending'
  },
  {
    id: 4,
    name: 'Back to School',
    type: 'Multi-channel',
    status: 'Active',
    reach: '30,000',
    conversion: '4.1%',
    budget: '$3,500',
    startDate: '2024-08-01',
    endDate: '2024-09-15',
    performance: 'High'
  },
  {
    id: 5,
    name: 'Flash Sale',
    type: 'Push Notification',
    status: 'Completed',
    reach: '8,000',
    conversion: '5.7%',
    budget: '$500',
    startDate: '2024-05-01',
    endDate: '2024-05-02',
    performance: 'High'
  }
];

export const userData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-03-15 14:30',
    orders: 25,
    totalSpent: '$2,450',
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2024-03-15 12:45',
    orders: 12,
    totalSpent: '$890',
    location: 'London, UK'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2024-03-10 09:15',
    orders: 8,
    totalSpent: '$650',
    location: 'Toronto, CA'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-03-15 16:20',
    orders: 18,
    totalSpent: '$1,750',
    location: 'Sydney, AU'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-03-14 11:30',
    orders: 5,
    totalSpent: '$320',
    location: 'Paris, FR'
  }
];

export const productData = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    stock: 45,
    category: 'Electronics',
    status: 'In Stock',
    sales: 128,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 49.99,
    stock: 30,
    category: 'Electronics',
    status: 'In Stock',
    sales: 256,
    rating: 4.2,
    reviews: 145
  },
  {
    id: 3,
    name: 'Gaming Keyboard',
    price: 129.99,
    stock: 0,
    category: 'Electronics',
    status: 'Out of Stock',
    sales: 89,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 4,
    name: 'Ultra HD Monitor',
    price: 399.99,
    stock: 12,
    category: 'Electronics',
    status: 'Low Stock',
    sales: 67,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 5,
    name: 'Ergonomic Chair',
    price: 299.99,
    stock: 25,
    category: 'Furniture',
    status: 'In Stock',
    sales: 45,
    rating: 4.4,
    reviews: 28
  }
];

export const orderData = [
  {
    id: '#ORD-001',
    customer: 'John Doe',
    date: '2024-03-15',
    total: 299.99,
    status: 'Delivered',
    items: 3,
    paymentMethod: 'Credit Card',
    shippingMethod: 'Express'
  },
  {
    id: '#ORD-002',
    customer: 'Jane Smith',
    date: '2024-03-14',
    total: 149.99,
    status: 'Processing',
    items: 2,
    paymentMethod: 'PayPal',
    shippingMethod: 'Standard'
  },
  {
    id: '#ORD-003',
    customer: 'Mike Johnson',
    date: '2024-03-14',
    total: 499.99,
    status: 'Shipped',
    items: 4,
    paymentMethod: 'Credit Card',
    shippingMethod: 'Express'
  },
  {
    id: '#ORD-004',
    customer: 'Sarah Wilson',
    date: '2024-03-13',
    total: 89.99,
    status: 'Processing',
    items: 1,
    paymentMethod: 'Debit Card',
    shippingMethod: 'Standard'
  },
  {
    id: '#ORD-005',
    customer: 'David Brown',
    date: '2024-03-13',
    total: 199.99,
    status: 'Delivered',
    items: 2,
    paymentMethod: 'PayPal',
    shippingMethod: 'Express'
  }
];

export const teamData = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Admin',
    email: 'john@example.com',
    department: 'Management',
    status: 'Active',
    joinDate: '2023-01-15',
    projects: 8,
    performance: 'Excellent',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    role: 'Editor',
    email: 'sarah@example.com',
    department: 'Marketing',
    status: 'Active',
    joinDate: '2023-03-20',
    projects: 5,
    performance: 'Good',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Viewer',
    email: 'michael@example.com',
    department: 'Sales',
    status: 'Inactive',
    joinDate: '2023-06-10',
    projects: 3,
    performance: 'Average',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Admin',
    email: 'emily@example.com',
    department: 'Development',
    status: 'Active',
    joinDate: '2023-02-28',
    projects: 12,
    performance: 'Excellent',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 5,
    name: 'Robert Wilson',
    role: 'Editor',
    email: 'robert@example.com',
    department: 'Design',
    status: 'Active',
    joinDate: '2023-04-15',
    projects: 6,
    performance: 'Good',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];