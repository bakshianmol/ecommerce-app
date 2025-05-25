import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function Products() {
  return <h2>Products Page</h2>;
}

function Cart() {
  return <h2>Cart Page</h2>;
}

function App() {
  return (
    <div className="container mt-3">
      <nav>
        <Link to="/" className="me-3">Home</Link>
        <Link to="/products" className="me-3">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
