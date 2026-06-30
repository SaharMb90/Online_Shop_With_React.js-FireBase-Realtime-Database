import React from 'react';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h2>Product Details - {productId}</h2>
      {/* Add logic to fetch and display product details */}
    </div>
  );
};

export default ProductDetails;
