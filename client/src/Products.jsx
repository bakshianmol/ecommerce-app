import React from 'react';

function Products() {
  const products = [
    { id: 1, name: 'T-shirt', price: 299, description: 'Comfortable cotton t-shirt' },
    { id: 2, name: 'Sneakers', price: 1999, description: 'Stylish running sneakers' },
    { id: 3, name: 'Backpack', price: 899, description: 'Durable and spacious backpack' },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">₹{product.price}</h6>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
