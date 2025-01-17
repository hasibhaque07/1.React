/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  return (
      <article className="product">
      <img src={props.q.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{props.title}</h4>
        <p>Price: $ {props.p.price}</p>
        <p>Rating: {props.p.rating.rate}/5</p>
        <p className="product__desc">Description: {props.p.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
