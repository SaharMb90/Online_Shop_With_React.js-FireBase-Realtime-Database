<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import useReveal from '../hooks/useReveal';
import { useAuth } from '../context/AuthContext';

import zzPlant from '../assets/zz-plant-gray-pot.jpg';
import monstera from '../assets/monstera-deliciosa-plant-pot.jpg';
import calatheaWhite from '../assets/calathea-medallion-plant-white-pot.jpg';
import peaceLily from '../assets/peace-lily-plant-pot.jpg';
import calatheaGray from '../assets/calathea-plant-gray-pot.jpg';
import monstera2 from '../assets/monstera-deliciosa-plant-pot (1).jpg';
import venusTrap from '../assets/venus_fly_trap.jpg';
import palm from '../assets/ruffled-leaf-palm-plant-rattan-basket.jpg';

import './Home.css';

const PRODUCTS = [
  { id: 1, title: 'ZZ Plant', price: 24, image: zzPlant, note: 'Thrives on neglect, low light forgiving.' },
  { id: 2, title: 'Monstera Deliciosa', price: 38, image: monstera, note: 'Fenestrated leaves, fast-growing climber.' },
  { id: 3, title: 'Calathea Medallion', price: 29, image: calatheaWhite, note: 'Folds its leaves at dusk like a closing book.' },
  { id: 4, title: 'Peace Lily', price: 22, image: peaceLily, note: 'Tells you when it\u2019s thirsty by drooping.' },
  { id: 5, title: 'Calathea Rufibarba', price: 27, image: calatheaGray, note: 'Velvet-backed leaves, gentle ripple pattern.' },
  { id: 6, title: 'Monstera, potted', price: 41, image: monstera2, note: 'A mature specimen ready for a corner.' },
  { id: 7, title: 'Venus Flytrap', price: 19, image: venusTrap, note: 'Carnivorous, snaps shut in under a second.' },
  { id: 8, title: 'Ruffled Fan Palm', price: 33, image: palm, note: 'Wide rattan basket, statement foliage.' },
];

const Home = ({ addToTrolley }) => {
  const [products, setProducts] = useState([]);
  const [heroRef, heroVisible] = useReveal(0.05);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const handleAdd = (product) => {
    if (!user) {
      navigate('/login');
      return;
    }
    addToTrolley(product);
  };

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero__panes" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="section-wrap hero__content">
          <p className={`eyebrow reveal ${heroVisible ? 'is-visible' : ''}`}>No. 01 — Conservatory</p>
          <h1 className={`hero__title reveal reveal-delay-1 ${heroVisible ? 'is-visible' : ''}`}>
            Plants raised<br />under glass, <span>not trends.</span>
          </h1>
          <p className={`hero__lede reveal reveal-delay-2 ${heroVisible ? 'is-visible' : ''}`}>
            Eight specimens, propagated slowly and shipped rooted. Every leaf you see is the one you receive.
          </p>
          <a href="#collection" className={`hero__cta reveal reveal-delay-3 ${heroVisible ? 'is-visible' : ''}`}>
            View the collection ↓
          </a>
        </div>
      </section>

      <section id="collection" className="collection section-wrap">
        <h2 className="collection__heading">The current collection</h2>
        <p className="collection__sub">Each plant is potted to order and quarantined two weeks before it ships.</p>
        <div className="collection__grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onAdd={handleAdd} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
=======
import React, { useState, useEffect } from 'react';
import product1Image from '../../src/zz-plant-gray-pot.jpg';
import product2Image from '../../src/monstera-deliciosa-plant-pot.jpg';
import product3Image from '../../src/calathea-medallion-plant-white-pot.jpg';
import product4Image from '../../src/peace-lily-plant-pot.jpg';
import product5Image from '../../src/calathea-plant-gray-pot.jpg';
import product6Image from '../../src/monstera-deliciosa-plant-pot (1).jpg'
import ProductTrolley from '../components/ProductTrolley';
import './Home.css';

const Home = ({ addToTrolley }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products from an API
    const fetchedProducts = [
      { id: 1, title: 'Product 1', price: 10, image: product1Image },
      { id: 2, title: 'Product 2', price: 20, image: product2Image },
      { id: 3, title: 'Product 3', price: 10, image: product3Image },
      { id: 4, title: 'Product 4', price: 10, image: product4Image },
      { id: 5, title: 'Product 5', price: 5, image: product5Image },
      { id: 5, title: 'Product 6', price: 15, image: product6Image },
      // Add more products here
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="home">
      <h1> home page</h1>
      <div className="product-list" >
        {products.map((product) => (
          <ProductTrolley
            key={product.id}
            product={product}
            addToTrolley={addToTrolley}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
