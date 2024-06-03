// src/components/ProductsSection.js
import React from 'react';
import { useGetProductsQuery } from '../services/products';
import './ProductsSection.css';

const ProductsSection = () => {
  const { data, error, isLoading } = useGetProductsQuery(10);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="products-section">
      <div className="products-header">
        <small>Featured Products</small>
        <h2>Bestseller Products</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="products-grid">
        {data.products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="load-more">
        Load More Products
      </div>
    </div>
  );
};

export default ProductsSection;
