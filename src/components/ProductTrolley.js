import React from 'react';

const ProductTrolley = ({ product, addToTrolley }) => {
  return (
    <div className="product-Trolley">
      <img src={product.image} alt={product.title} width="100" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToTrolley(product)}>Add to Basket</button>
    </div>
  );
};

export default ProductTrolley;
