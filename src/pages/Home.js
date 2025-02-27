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

