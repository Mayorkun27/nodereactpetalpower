import React from 'react';

const Ordersummary = ({ cartProducts, orderInfo }) => {
    console.log(orderInfo)

    const summation = 
        cartProducts
            .reduce((sum, cartProducts) => 
                sum + Number(cartProducts.price), 0).toFixed(2)

  return (

    <div className='mt-10 flex flex-col gap-4'>
       <div className="border border-secClr/40 p-5 rounded-md">
            <div>
                <h3 className='font-bold text-2xl'>Order Summary</h3>
                <ul className='my-3'>
                    <li>Product Details</li>
                    <li className="flex justify-between items-center pe-2">
                        <span>Total Items in Cart: </span>
                        <span className='font-semibold'>{cartProducts.length}</span>
                    </li>
                </ul>
            </div>
            <div className="table-responsive relative pe-2 overflow-auto dept-table">
                <table className='border whitespace-nowrap w-full text-center border-black'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map((cartProduct) => (
                                <tr key={cartProduct.prodId}>
                                    <td>{cartProduct.name}</td>
                                    <td>{cartProduct.basePrice}</td>
                                    <td>{cartProduct.quantity}</td>
                                    <td>{cartProduct.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} className='text-start font-bold border-0'>Total:</td>
                            <td colSpan={2} className='text-end font-bold border-0'>${summation}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div> 
       <div className="border border-secClr/40 py-3 px-5 rounded-md">
            <p className='text-start font-bold text-xl mb-5'>Shipping Details</p>
            <ul className='my-3 space-y-1'>
                <li hidden>{orderInfo.clientId}</li>
                <li className='capitalize'>{`${orderInfo.fName} ${orderInfo.lName}`}</li>
                <li>{orderInfo.address}</li>
                <li>{orderInfo.email}</li>
                <li>{orderInfo.phoneNumber}</li>
            </ul>
        </div> 
        <button
            type='submit'
            className='bg-secClr text-pryClr w-full h-[45px] rounded-xl mt-5'
        >Continue to Payment</button>
    </div>
    
  );
};

export default Ordersummary;
