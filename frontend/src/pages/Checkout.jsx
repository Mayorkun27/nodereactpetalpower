import React, { useEffect, useState } from 'react';
import { useCart } from '../hooks/CartContext';
import CartSummary from '../components/Shopcomponents/Cartsummary';
import BillingForm from '../components/Shopcomponents/Billingform';
import PlaceOrder from '../components/Shopcomponents/Placeorder';
import ButtonTwo from '../components/Button/Buttontwo';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"
import ShoppingForm from './Checkoutpages/Shippingform';
import StepsIndicator from './Checkoutpages/StepsIndicator';
import Ordersummary from './Checkoutpages/Ordersummary';

const Checkout = () => {
  const {cartProducts} = useCart();
  // const [billingDetails, setBillingDetails] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextStep = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const backStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (

    <div className="p-5 min-h-[100vh] flex justify-center items-center">
        <div className="card lg:w-3/4 w-full mx-auto bg-tetClr border border-secClr rounded-xl py-5 md:px-10 px-5">
            <h3 className='text-2xl text-center mb-3 font-bold'>Checkout</h3>
            <StepsIndicator />
            <div className="mt-10">
              {currentIndex === 0 && <ShoppingForm />}
              {currentIndex === 1 && <Ordersummary orderInfo={''} cartProducts={cartProducts} />}
              {currentIndex === 2 && <div>Coming Soon</div>}
            </div>
            <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-secClr/50 text-pryClr px-5 h-[45px] rounded-xl mt-5"
              onClick={currentIndex === 0 ? () => window.location.href = '/#/shop' : backStep}
            >
              Back
            </button>
            <button 
              type='button' 
              className='bg-secClr text-pryClr px-5 h-[45px] rounded-xl mt-5'
              onClick={() => nextStep()}
            >Next</button>
            </div>
        </div>
    </div>
  );
};

export default Checkout;


// <div className='w-full h-screen border-2 border-secClr py-10 px-5 flex justify-center items-center'>
//     <div className="checkout-page rounded-lg border-0 p-5 border-red-600 bg-tetClr shadow-xl shadow-secClr/30 md:w-[450px] w-[330px] h-[400px] flex flex-col justify-center items-center">
//         <div className="flex justify-between w-full items-end">
//             <h1 className='text-2xl font-bold'>Checkout</h1>
//             <Link to={'/shop'} children={<ButtonTwo title={"Cancel Checkout"} optStyle={"whitespace-nowrap p-0 bg-transparent text-compClr text-sm font-semibold"} />} />
//         </div>
//         <div className="flex w-full overflow-x-scroll border-2 border-yellow-800">
//             <section className='w-full border-2'>
//                 <CartSummary cart={cartProducts} />
//             </section>
//             <section className='w-full border-2'>
//                 <BillingForm setBillingDetails={setBillingDetails} />
//             </section>
//             <section className='w-full border-2'>
//                 <PlaceOrder billingDetails={billingDetails} cart={cartProducts} />
//             </section>
//         </div>
//     </div>
// </div>