import React from 'react';
import useReveal from '../hooks/useReveal';
import './ProductCard.css';

const ProductCard = ({ product, index, onAdd }) => {
  const [ref, visible] = useReveal();
  const delayClass = `reveal-delay-${(index % 4) + 1}`;

  return (
    <article ref={ref} className={`pane-card reveal ${delayClass} ${visible ? 'is-visible' : ''}`}>
      <div className="pane-card__frame">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="pane-card__price">${product.price}</span>
      </div>
      <div className="pane-card__body">
        <h3>{product.title}</h3>
        <p>{product.note}</p>
        <button type="button" className="pane-card__btn" onClick={() => onAdd(product)}>
          Add to basket
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
