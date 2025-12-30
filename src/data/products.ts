import type { Product, HeroSlide } from '@/types'

export const products: Product[] = [
  // Smartphones
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    subcategory: 'iPhone',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    rating: 4.9,
    reviewCount: 2847,
    inStock: true,
    stockCount: 50,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600',
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600',
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8F8A81' },
      { name: 'Blue Titanium', hex: '#394E5C' },
      { name: 'White Titanium', hex: '#F5F5F0' },
      { name: 'Black Titanium', hex: '#3C3C3D' },
    ],
    storage: ['256GB', '512GB', '1TB'],
    description: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile Pro camera system.',
    highlights: [
      'A17 Pro chip with 6-core GPU',
      'Pro camera system with 5x Telephoto',
      'Action button for quick actions',
      'Titanium design with Ceramic Shield',
      'USB-C with USB 3 speeds',
    ],
    specifications: {
      Display: {
        Size: '6.7 inches',
        Resolution: '2796 x 1290 pixels',
        Type: 'Super Retina XDR OLED',
        'Refresh Rate': '120Hz ProMotion',
      },
      Performance: {
        Chip: 'A17 Pro',
        RAM: '8GB',
        Storage: '256GB / 512GB / 1TB',
      },
      Camera: {
        Main: '48MP, f/1.78',
        'Ultra Wide': '12MP, f/2.2',
        Telephoto: '12MP, 5x optical zoom',
        Front: '12MP TrueDepth',
      },
      Battery: {
        Capacity: '4422 mAh',
        'Video Playback': 'Up to 29 hours',
        Charging: '20W wired, 15W MagSafe',
      },
    },
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    subcategory: 'Samsung Galaxy',
    price: 1299,
    originalPrice: 1419,
    discount: 8,
    rating: 4.8,
    reviewCount: 1923,
    inStock: true,
    stockCount: 35,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600',
    ],
    colors: [
      { name: 'Titanium Black', hex: '#1C1C1C' },
      { name: 'Titanium Gray', hex: '#808080' },
      { name: 'Titanium Violet', hex: '#B4A7D6' },
      { name: 'Titanium Yellow', hex: '#F9E076' },
    ],
    storage: ['256GB', '512GB', '1TB'],
    description: 'Galaxy AI is here. Search like never before, Icons icons icons icons. Icons icons icons icons Icons icons icons icons.',
    highlights: [
      'Galaxy AI with Circle to Search',
      '200MP Main Camera',
      'Titanium Frame',
      '5000mAh Battery',
      'S Pen included',
    ],
    specifications: {
      Display: {
        Size: '6.8 inches',
        Resolution: '3088 x 1440 pixels',
        Type: 'Dynamic AMOLED 2X',
        'Refresh Rate': '1-120Hz Adaptive',
      },
      Performance: {
        Chip: 'Snapdragon 8 Gen 3',
        RAM: '12GB',
        Storage: '256GB / 512GB / 1TB',
      },
      Camera: {
        Main: '200MP, f/1.7',
        'Ultra Wide': '12MP, f/2.2',
        Telephoto: '50MP, 5x + 10MP, 3x',
        Front: '12MP, f/2.2',
      },
      Battery: {
        Capacity: '5000 mAh',
        'Video Playback': 'Up to 30 hours',
        Charging: '45W wired, 15W wireless',
      },
    },
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    category: 'Smartphones',
    subcategory: 'Google Pixel',
    price: 999,
    rating: 4.7,
    reviewCount: 1456,
    inStock: true,
    stockCount: 42,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    ],
    colors: [
      { name: 'Obsidian', hex: '#1C1C1C' },
      { name: 'Porcelain', hex: '#F5F5F0' },
      { name: 'Bay', hex: '#84A9C0' },
    ],
    storage: ['128GB', '256GB', '512GB'],
    description: 'The best of Google AI, the best Pixel camera yet, and 7 years of software updates.',
    highlights: [
      'Google Tensor G3 chip',
      'Magic Eraser & Best Take',
      '50MP main camera with Night Sight',
      '7 years of OS updates',
      'Temperature sensor',
    ],
    specifications: {
      Display: {
        Size: '6.7 inches',
        Resolution: '2992 x 1344 pixels',
        Type: 'LTPO OLED',
        'Refresh Rate': '1-120Hz',
      },
      Performance: {
        Chip: 'Google Tensor G3',
        RAM: '12GB',
        Storage: '128GB / 256GB / 512GB',
      },
      Camera: {
        Main: '50MP, f/1.68',
        'Ultra Wide': '48MP, f/1.95',
        Telephoto: '48MP, 5x optical zoom',
        Front: '10.5MP, f/2.2',
      },
      Battery: {
        Capacity: '5050 mAh',
        'Video Playback': 'Up to 24 hours',
        Charging: '30W wired, 23W wireless',
      },
    },
    isNewArrival: true,
    isFeatured: true,
  },
  // Laptops
  {
    id: 'macbook-pro-16-m3-max',
    name: 'MacBook Pro 16" M3 Max',
    brand: 'Apple',
    category: 'Laptops',
    subcategory: 'MacBook',
    price: 3499,
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 15,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    ],
    colors: [
      { name: 'Space Black', hex: '#1D1D1F' },
      { name: 'Silver', hex: '#E3E4E5' },
    ],
    storage: ['1TB', '2TB', '4TB', '8TB'],
    description: 'The most powerful MacBook Pro ever. Up to 22 hours battery life. Liquid Retina XDR display.',
    highlights: [
      'Apple M3 Max chip',
      'Up to 128GB unified memory',
      'Up to 22 hours battery life',
      'Liquid Retina XDR display',
      'MagSafe charging',
    ],
    specifications: {
      Display: {
        Size: '16.2 inches',
        Resolution: '3456 x 2234 pixels',
        Type: 'Liquid Retina XDR',
        'Refresh Rate': '120Hz ProMotion',
      },
      Performance: {
        Chip: 'Apple M3 Max',
        RAM: 'Up to 128GB',
        Storage: '1TB - 8TB SSD',
      },
      Ports: {
        Thunderbolt: '3x Thunderbolt 4',
        HDMI: 'HDMI 2.1',
        'SD Card': 'SDXC card slot',
        MagSafe: 'MagSafe 3',
      },
      Battery: {
        Life: 'Up to 22 hours',
        Charging: '140W USB-C',
      },
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15 (2024)',
    brand: 'Dell',
    category: 'Laptops',
    subcategory: 'Windows Laptops',
    price: 1899,
    originalPrice: 2099,
    discount: 10,
    rating: 4.6,
    reviewCount: 654,
    inStock: true,
    stockCount: 28,
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
    ],
    colors: [
      { name: 'Platinum Silver', hex: '#C0C0C0' },
    ],
    storage: ['512GB', '1TB', '2TB'],
    description: 'Premium Windows laptop with InfinityEdge display and powerful performance.',
    highlights: [
      'Intel Core Ultra 7 processor',
      '15.6" OLED InfinityEdge display',
      'NVIDIA GeForce RTX 4060',
      'Up to 32GB RAM',
      'Thunderbolt 4 ports',
    ],
    specifications: {
      Display: {
        Size: '15.6 inches',
        Resolution: '3456 x 2160 pixels',
        Type: 'OLED InfinityEdge',
        'Refresh Rate': '60Hz',
      },
      Performance: {
        Processor: 'Intel Core Ultra 7',
        RAM: 'Up to 32GB DDR5',
        Graphics: 'NVIDIA RTX 4060',
      },
      Ports: {
        Thunderbolt: '2x Thunderbolt 4',
        'USB-C': '1x USB-C 3.2',
        'SD Card': 'SD card reader',
      },
      Battery: {
        Capacity: '86Wh',
        Life: 'Up to 13 hours',
      },
    },
    isDeal: true,
    dealEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  // Audio
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Audio',
    subcategory: 'Earbuds',
    price: 249,
    rating: 4.8,
    reviewCount: 4521,
    inStock: true,
    stockCount: 120,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600',
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
    ],
    description: 'Active Noise Cancellation, Transparency mode, and Personalized Spatial Audio.',
    highlights: [
      'Active Noise Cancellation 2x better',
      'Adaptive Transparency',
      'Personalized Spatial Audio',
      'Touch control for media and calls',
      'Up to 6 hours listening time',
    ],
    specifications: {
      Audio: {
        Driver: 'Apple-designed H2 chip',
        ANC: 'Active Noise Cancellation',
        'Spatial Audio': 'Personalized with head tracking',
      },
      Battery: {
        Earbuds: 'Up to 6 hours',
        'With Case': 'Up to 30 hours',
        Charging: 'MagSafe, USB-C, Qi wireless',
      },
      Features: {
        'Water Resistance': 'IPX4',
        Controls: 'Touch control, stem press',
        Connectivity: 'Bluetooth 5.3',
      },
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Audio',
    subcategory: 'Headphones',
    price: 349,
    originalPrice: 399,
    discount: 13,
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    stockCount: 45,
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600',
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Midnight Blue', hex: '#191970' },
    ],
    description: 'Industry-leading noise cancellation with exceptional sound quality.',
    highlights: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Crystal clear hands-free calling',
      'Multipoint connection',
      'Ultra-comfortable design',
    ],
    specifications: {
      Audio: {
        Driver: '30mm carbon fiber composite',
        Codec: 'LDAC, AAC, SBC',
        'Frequency Response': '4Hz-40,000Hz',
      },
      ANC: {
        Processor: 'V1 Integrated Processor',
        Microphones: '8 microphones',
        Modes: 'ANC, Ambient, Off',
      },
      Battery: {
        Life: 'Up to 30 hours',
        'Quick Charge': '3 hours in 3 mins',
        Charging: 'USB-C',
      },
    },
    isDeal: true,
    isBestSeller: true,
    dealEndsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'bose-quietcomfort-ultra',
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    category: 'Audio',
    subcategory: 'Headphones',
    price: 429,
    rating: 4.7,
    reviewCount: 987,
    inStock: true,
    stockCount: 32,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600',
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'White Smoke', hex: '#F5F5F5' },
      { name: 'Sandstone', hex: '#786D5F' },
    ],
    description: 'Immersive Audio with world-class noise cancellation.',
    highlights: [
      'Bose Immersive Audio',
      'CustomTune technology',
      'World-class noise cancellation',
      'Up to 24 hours battery',
      'Premium comfort fit',
    ],
    specifications: {
      Audio: {
        Technology: 'Bose Immersive Audio',
        'Spatial Audio': 'With head tracking',
        EQ: 'Adjustable via app',
      },
      ANC: {
        Type: 'Active Noise Cancellation',
        Modes: 'Quiet, Aware, Immersion',
      },
      Battery: {
        Life: 'Up to 24 hours',
        'Quick Charge': '2.5 hours in 15 mins',
      },
    },
    isNewArrival: true,
  },
  // Wearables
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'Wearables',
    subcategory: 'Smartwatches',
    price: 799,
    rating: 4.9,
    reviewCount: 1234,
    inStock: true,
    stockCount: 28,
    images: [
      'https://images.unsplash.com/photo-1434493789847-2a75b69f2e1f?w=600',
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8F8A81' },
    ],
    description: 'The most rugged and capable Apple Watch for exploration and endurance.',
    highlights: [
      'S9 SiP with 4-core Neural Engine',
      '3000 nits peak brightness',
      'Precision dual-frequency GPS',
      '36-hour battery life',
      'Depth gauge and water temperature',
    ],
    specifications: {
      Display: {
        Size: '49mm',
        Type: 'Always-On Retina LTPO OLED',
        Brightness: '3000 nits peak',
      },
      Performance: {
        Chip: 'S9 SiP',
        'Neural Engine': '4-core',
        Storage: '64GB',
      },
      Features: {
        GPS: 'Precision dual-frequency',
        'Water Resistance': '100m, EN13319',
        Cellular: 'LTE and UMTS',
      },
      Battery: {
        Life: 'Up to 36 hours',
        'Low Power Mode': 'Up to 72 hours',
      },
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 Classic',
    brand: 'Samsung',
    category: 'Wearables',
    subcategory: 'Smartwatches',
    price: 429,
    originalPrice: 479,
    discount: 10,
    rating: 4.6,
    reviewCount: 876,
    inStock: true,
    stockCount: 45,
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600',
    ],
    colors: [
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'Silver', hex: '#C0C0C0' },
    ],
    storage: ['16GB'],
    description: 'Classic design with rotating bezel and advanced health features.',
    highlights: [
      'Rotating bezel design',
      'Advanced sleep coaching',
      'Body composition analysis',
      'Sapphire crystal glass',
      'Up to 40 hours battery',
    ],
    specifications: {
      Display: {
        Size: '47mm',
        Type: 'Super AMOLED',
        Resolution: '480 x 480 pixels',
      },
      Performance: {
        Processor: 'Exynos W930',
        RAM: '2GB',
        Storage: '16GB',
      },
      Health: {
        Sensors: 'Heart rate, ECG, BIA',
        'Sleep Tracking': 'Advanced sleep coaching',
        'Blood Oxygen': 'Yes',
      },
      Battery: {
        Capacity: '425mAh',
        Life: 'Up to 40 hours',
      },
    },
    isDeal: true,
    dealEndsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  // Tablets
  {
    id: 'ipad-pro-12-9-m2',
    name: 'iPad Pro 12.9" M2',
    brand: 'Apple',
    category: 'Tablets',
    subcategory: 'iPad',
    price: 1099,
    rating: 4.8,
    reviewCount: 1567,
    inStock: true,
    stockCount: 22,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600',
    ],
    colors: [
      { name: 'Space Gray', hex: '#8D8D93' },
      { name: 'Silver', hex: '#E3E4E5' },
    ],
    storage: ['128GB', '256GB', '512GB', '1TB', '2TB'],
    description: 'Supercharged by M2. Stunning Liquid Retina XDR display. Versatile for any task.',
    highlights: [
      'Apple M2 chip',
      'Liquid Retina XDR display',
      'ProMotion and True Tone',
      'Face ID',
      'Thunderbolt / USB 4',
    ],
    specifications: {
      Display: {
        Size: '12.9 inches',
        Resolution: '2732 x 2048 pixels',
        Type: 'Liquid Retina XDR',
        'Refresh Rate': '120Hz ProMotion',
      },
      Performance: {
        Chip: 'Apple M2',
        RAM: 'Up to 16GB',
        Storage: '128GB - 2TB',
      },
      Camera: {
        Rear: '12MP Wide + 10MP Ultra Wide',
        Front: '12MP Ultra Wide',
        'LiDAR': 'Yes',
      },
      Connectivity: {
        Port: 'Thunderbolt / USB 4',
        WiFi: 'Wi-Fi 6E',
        Cellular: '5G optional',
      },
    },
    isBestSeller: true,
    isFeatured: true,
  },
  // Gaming
  {
    id: 'ps5-console',
    name: 'PlayStation 5 Console',
    brand: 'Sony',
    category: 'Gaming',
    subcategory: 'Consoles',
    price: 499,
    rating: 4.9,
    reviewCount: 8765,
    inStock: true,
    stockCount: 18,
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600',
    ],
    description: 'Experience lightning-fast loading, deeper immersion with haptic feedback.',
    highlights: [
      'Ultra-high speed SSD',
      'Ray Tracing',
      'Up to 120fps with 120Hz output',
      'Haptic feedback',
      'Tempest 3D AudioTech',
    ],
    specifications: {
      Performance: {
        CPU: '8x Zen 2 Cores at 3.5GHz',
        GPU: '10.28 TFLOPs RDNA 2',
        RAM: '16GB GDDR6',
      },
      Storage: {
        SSD: '825GB Custom SSD',
        Expansion: 'NVMe SSD Slot',
      },
      Output: {
        Resolution: 'Up to 8K',
        'Frame Rate': 'Up to 120fps',
        HDR: 'Yes',
      },
      Audio: {
        '3D Audio': 'Tempest 3D AudioTech',
      },
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X',
    brand: 'Microsoft',
    category: 'Gaming',
    subcategory: 'Consoles',
    price: 499,
    rating: 4.8,
    reviewCount: 6543,
    inStock: true,
    stockCount: 25,
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600',
    ],
    description: 'The fastest, most powerful Xbox ever. Play thousands of games.',
    highlights: [
      '12 teraflops of processing power',
      'True 4K gaming',
      'Up to 120fps',
      'Quick Resume',
      'Xbox Game Pass compatible',
    ],
    specifications: {
      Performance: {
        CPU: '8-core AMD Zen 2 at 3.8GHz',
        GPU: '12 TFLOPs RDNA 2',
        RAM: '16GB GDDR6',
      },
      Storage: {
        SSD: '1TB Custom NVME SSD',
        Expansion: 'Seagate Expansion Card',
      },
      Output: {
        Resolution: 'Up to 8K',
        'Frame Rate': 'Up to 120fps',
        'Variable Refresh': 'Yes',
      },
      Features: {
        'Quick Resume': 'Multiple games',
        'Smart Delivery': 'Yes',
      },
    },
    isBestSeller: true,
  },
  // Cameras
  {
    id: 'sony-a7-iv',
    name: 'Sony Alpha 7 IV',
    brand: 'Sony',
    category: 'Cameras',
    subcategory: 'Mirrorless',
    price: 2498,
    rating: 4.8,
    reviewCount: 543,
    inStock: true,
    stockCount: 12,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    ],
    description: 'Full-frame mirrorless camera with 33MP sensor and advanced AF.',
    highlights: [
      '33MP full-frame sensor',
      'Real-time Eye AF',
      '4K 60p video recording',
      '759-point phase detection AF',
      '5-axis in-body stabilization',
    ],
    specifications: {
      Sensor: {
        Type: 'Full-frame CMOS',
        Resolution: '33 Megapixels',
        'ISO Range': '100-51200',
      },
      Autofocus: {
        Points: '759 phase detection',
        'Eye AF': 'Real-time Eye AF',
        'Subject Detection': 'Human, Animal, Bird',
      },
      Video: {
        Resolution: '4K 60p',
        Codec: 'XAVC S-I, XAVC HS',
        'Log Profile': 'S-Log3',
      },
      Stabilization: {
        Type: '5-axis in-body',
        Compensation: 'Up to 5.5 stops',
      },
    },
    isFeatured: true,
  },
  // Accessories
  {
    id: 'magsafe-charger',
    name: 'MagSafe Charger',
    brand: 'Apple',
    category: 'Accessories',
    subcategory: 'Chargers & Cables',
    price: 39,
    rating: 4.5,
    reviewCount: 3456,
    inStock: true,
    stockCount: 200,
    images: [
      'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600',
    ],
    description: 'Wireless charging up to 15W with perfectly aligned magnets.',
    highlights: [
      'Up to 15W wireless charging',
      'Perfect alignment every time',
      'Compatible with MagSafe cases',
      '1m cable length',
    ],
    specifications: {
      Charging: {
        Power: 'Up to 15W',
        Type: 'Wireless MagSafe',
      },
      Compatibility: {
        iPhone: 'iPhone 12 and later',
        AirPods: 'AirPods with MagSafe case',
      },
      Cable: {
        Length: '1 meter',
        Connector: 'USB-C',
      },
    },
    isBestSeller: true,
  },
  {
    id: 'anker-powerbank-26800',
    name: 'Anker PowerCore 26800mAh',
    brand: 'Logitech',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 65,
    originalPrice: 79,
    discount: 18,
    rating: 4.7,
    reviewCount: 2134,
    inStock: true,
    stockCount: 85,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600',
    ],
    description: 'High-capacity portable charger with dual USB-C and USB-A ports.',
    highlights: [
      '26800mAh capacity',
      'Dual USB-C PD ports',
      '65W total output',
      'Charges laptops and phones',
      'LED power indicator',
    ],
    specifications: {
      Battery: {
        Capacity: '26800mAh',
        Type: 'Lithium-ion',
      },
      Output: {
        'USB-C 1': '45W PD',
        'USB-C 2': '20W PD',
        'USB-A': '18W QC 3.0',
      },
      Input: {
        'USB-C': '65W PD',
      },
    },
    isDeal: true,
    dealEndsAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max',
    subtitle: 'Titanium. So Strong. So Light. So Pro.',
    description: 'Forged in titanium with the A17 Pro chip, the most powerful chip ever in a smartphone.',
    ctaText: 'Shop Now',
    ctaLink: '/product/iphone-15-pro-max',
    secondaryCtaText: 'Learn More',
    secondaryCtaLink: '/shop/smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200',
  },
  {
    id: '2',
    title: 'MacBook Pro M3',
    subtitle: 'Mind-Blowing. Head-Turning.',
    description: 'The most advanced chips ever built for a personal computer.',
    ctaText: 'Explore',
    ctaLink: '/product/macbook-pro-16-m3-max',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200',
  },
  {
    id: '3',
    title: 'Premium Audio',
    subtitle: 'Sound Like Never Before',
    description: 'Experience world-class noise cancellation and crystal-clear audio.',
    ctaText: 'Shop Audio',
    ctaLink: '/shop/audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200',
  },
]

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured)
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.isBestSeller)
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNewArrival)
}

export function getDeals(): Product[] {
  return products.filter(p => p.isDeal && p.dealEndsAt)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.brand.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery)
  )
}
