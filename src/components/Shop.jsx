// src/components/Shop.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../services/products'; // Ensure this service fetches products
import './Shop.css';
import carouselright from '../assets/carouselright.svg'; // Add your arrow icons
import carouselleft from '../assets/carouselright.svg';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddToCart = () => {
    setCart(cart + 1);
  };

  const product = products[currentIndex] || {};

  return (
    <div className="shop">
      <div className="shop-carousel">
        <img src={carouselleft} alt="Previous" onClick={prevSlide} className="arrow" />
        <div className="carousel-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <img src={carouselright} alt="Next" onClick={nextSlide} className="arrow" />
      </div>
      <div className="shop-details">
        <p>Floating Phone</p>
        <div className="reviews">
          <span>10 Reviews</span>
        </div>
        <p className="price"><strong>$1,139.33</strong></p>
        <p>Availability: In Stock</p>
        <hr />
        <div className="actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleLike}>Like</button>
        </div>   npm install react-router-dom
        npm install @reduxjs/toolkit react-redux
        <div className="icons">
          <img src="../assets/icons/cart.png" alt="Cart" />
          <img src="../assets/icons/heart.png" alt="Heart" />
          <img src="../assets/icons/eye.png" alt="Eye" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
