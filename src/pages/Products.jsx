import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PRODUCTS = [
  {
    "id": "5c6e81c2-742b-41ae-832e-ee3174ce46d3",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Wireless Mouse",
    "product_name": "Electronics",
    "category": "Ergonomic wireless mouse with USB receiver and long battery life",
    "image_url": "29.99",
    "description": "50",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "803e20d6-9109-4994-afca-1e2ac3ea5904",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Laptop Stand",
    "product_name": "Accessories",
    "category": "Adjustable aluminum laptop stand for better ergonomics and cooling",
    "image_url": "49.99",
    "description": "30",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "68eff8ff-745a-4818-b2b7-d44651e7497d",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "USB-C Cable",
    "product_name": "Accessories",
    "category": "6ft braided USB-C charging cable with fast charging support",
    "image_url": "12.99",
    "description": "100",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "67ff4e54-f24e-4b47-995a-ee3304cccb50",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Wireless Keyboard",
    "product_name": "Electronics",
    "category": "Mechanical wireless keyboard with RGB lighting and programmable keys",
    "image_url": "79.99",
    "description": "25",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "cca0420c-5ec7-48b6-9561-d54598984f8c",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "4K Monitor",
    "product_name": "Electronics",
    "category": "27-inch 4K UHD monitor with HDR support and ultra-thin bezels",
    "image_url": "399.99",
    "description": "15",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "65526c7a-6c30-4e2a-aeaf-0890895c9227",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Desk Lamp",
    "product_name": "Accessories",
    "category": "LED desk lamp with adjustable brightness and color temperature",
    "image_url": "34.99",
    "description": "40",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "40fd78c3-cc5a-453d-8c81-cfd57e5b0603",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Webcam",
    "product_name": "Electronics",
    "category": "1080p HD webcam with built-in microphone and auto-focus",
    "image_url": "59.99",
    "description": "35",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "ef703524-1ed0-4251-9994-e15f8c2e94d4",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Phone Holder",
    "product_name": "Accessories",
    "category": "Adjustable phone holder for desk with 360-degree rotation",
    "image_url": "19.99",
    "description": "60",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "7269dd32-18da-4d86-bbf5-ce92cb4311c8",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Bluetooth Speaker",
    "product_name": "Electronics",
    "category": "Portable Bluetooth speaker with 12-hour battery life",
    "image_url": "44.99",
    "description": "45",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  },
  {
    "id": "8538119a-89c1-462d-97df-e89fa13be412",
    "website_id": "d0b7b006-8ba9-499b-8282-b9ecb5d60596",
    "product_id": "Mouse Pad",
    "product_name": "Accessories",
    "category": "Large gaming mouse pad with non-slip rubber base",
    "image_url": "14.99",
    "description": "80",
    "price": 0,
    "stock_quantity": 0,
    "attributes": {},
    "created_at": "2025-12-01T18:12:16.338132+00:00"
  }
];

export default function Products() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    setProducts(PRODUCTS)
  }, [])

  const categories = ['all', ...new Set(products.map(p => p.category))]
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Our Products</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ marginRight: '1rem', fontWeight: 500 }}>Filter by category:</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ddd' }}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="product-card">
            {product.image_url ? (
              <img 
                src={product.image_url} 
                alt={product.product_name}
                className="product-image"
              />
            ) : (
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                No Image
              </div>
            )}
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{product.product_name}</h3>
            <p style={{ color: '#666', margin: '0.5rem 0', fontSize: '0.9rem' }}>
              {product.category}
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563EB', margin: '0.5rem 0' }}>
              $${product.price.toFixed(2)}
            </p>
            <p style={{ fontSize: '0.9rem', color: ${product.stock_quantity > 0 ? "'green'" : "'red'"}, marginBottom: '1rem' }}>
              {product.stock_quantity > 0 ? `In Stock (${product.stock_quantity})` : 'Out of Stock'}
            </p>
            <button 
              className="btn-primary"
              onClick={() => navigate(`/products/${product.product_id}`)}
              style={{ width: '100%' }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>
          No products found in this category.
        </p>
      )}
    </div>
  )
}