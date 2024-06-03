// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import CallToActionSection from './components/CallToActionSection';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <CallToActionSection />
      </div>
    </Provider>
  );
}

export default App;
