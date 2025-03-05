import React from 'react';

const CartSummary = ({ cart }) => {
  const calculateTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary overflow-y-scroll md:w-[400px] w-[330px]">
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <div className="">
            <div key={item.id} className="cart-item border w-full flex items-center justify-between">
                <div className='flex'>
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div>
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
                <p>Price: ${item.price}</p>
            </div>
        </div>
      ))}
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;
