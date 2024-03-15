
import React from 'react';

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced features.", price: 800 },
  { id: 3, name: "Tablet", description: "Portable tablet for entertainment and productivity.", price: 500 },
  { id: 4, name: "Headphones", description: "Premium noise-canceling headphones for immersive listening.", price: 300 },
  { id: 5, name: "Camera", description: "Professional DSLR camera for capturing stunning photos and videos.", price: 1500 }
];

const ProductList = () => {
  return (
    <div className="product-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} className="product-item" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h2 style={{ marginBottom: '5px' }}>{product.name}</h2>
          <p style={{ marginBottom: '10px' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold' }}>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
