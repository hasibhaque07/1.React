/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';

import Product from './Product';


const Products = (props) => {
  return (
     <Product q = {props.p}/>
      /*<article className="products">
      <img src={props.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{props.title}</h4>
        <p className='product__price'>Price: {props.price}</p>
        <p className='product__rating'>Rating: {props.rating.rate}/5</p>
        <p className="product__desc">Description: {props.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>*/
  );
};

export default Products;
