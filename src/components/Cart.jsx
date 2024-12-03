import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoTrashOutline, IoRemove, IoAddOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);

  const handleIncrement = (item) => {
    updateCart(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCart(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.prices && item.prices.price
        ? parseFloat(item.prices.price) / 100
        : parseFloat(item.price) / 100;
  
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <section className='shop-products--container checkout-products--container'>
      <div className='populated-posts'>
        <h2>Your cart</h2>
        {cart.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <div id="homeCont" className='post-container'>
            {cart.map((item) => (
              <div className='quick-link' key={item.id}>
                <div className='single-post-container'>
                  <img src={item.images?.[0]?.src || item.img} alt={item.name} />
                </div>
                <div className='cart-details'>
                  <div className='cart-text'>
                    <div>
                      <h3>{item.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <h3>
                      Price: ${isNaN(item.price) ? '0.00' : (item.price / 100).toFixed(2)} NZD
                    </h3>
                  </div>
                  <div className='cart-quantity'>
                    <div className='primary-button'>
                      <a onClick={() => handleDecrement(item)}>
                        <IoRemove />
                      </a>
                      <a>{item.quantity}</a>
                      <a onClick={() => handleIncrement(item)}>
                        <IoAddOutline />
                      </a>
                    </div>
                    <a onClick={() => removeFromCart(item.id)}>
                      <IoTrashOutline />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='cart-section--container'>
        <div className='instructions-section'>
          <h3>Leave a message (optional)</h3>
          <textarea type='text' placeholder='Type here' maxLength='100'></textarea>
        </div>
        <div className='cart-section'>
          <div className='cart-total'>
            <h3>
              Estimated total<br />
              ${calculateTotalPrice().toFixed(2)} NZD
            </h3>
            <p>Taxes, discounts, and shipping calculated at checkout.</p>
          </div>
          <div className='primary-button'>
            <NavLink to='/checkout'>Proceed to Checkout</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
