import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import FeaturedPosts from './components/FeaturedPosts';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <FeaturedPosts />
        <TestimonialsSection />
        <CallToActionSection />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
