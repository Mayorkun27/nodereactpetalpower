// components/PlaceOrder.js
import React from 'react';

const PlaceOrder = ({ billingDetails, cart }) => {
  const handlePlaceOrder = () => {
    if (!billingDetails || cart.length === 0) {
      alert('Please complete billing information and add items to the cart.');
      return;
    }

    // Simulate order placement
    console.log('Order placed:', { billingDetails, cart });
    alert('Order placed successfully!');
  };

  return <div className='md:w-[400px] w-[330px]'>
    <button onClick={handlePlaceOrder}>Place Order</button>
  </div>;
};

export default PlaceOrder;
