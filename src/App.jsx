import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header style={{ 
          background: '#2563EB',
          color: 'white',
          padding: '1rem 2rem'
        }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ margin: 0 }}>QuickWad</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
              <Link to="/products" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Products</Link>
              <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Cart</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <footer style={{ 
          background: '#f5f5f5',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <p style={{ margin: 0, color: '#666' }}>© 2024 QuickWad. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App