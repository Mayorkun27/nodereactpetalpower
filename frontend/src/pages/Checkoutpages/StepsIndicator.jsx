import React from 'react';

const StepsIndicator = () => {

  return (

    <div className="flex justify-between">
        <div className="flex flex-col items-center">
            <h3 className='w-12 h-12 flex items-center justify-center rounded-full bg-secClr text-tetClr font-bold text-xl'>1</h3>
            <p>Shipping</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className='w-12 h-12 flex items-center justify-center rounded-full bg-secClr/40 text-tetClr font-bold text-xl'>2</h3>
            <p>Payment</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className='w-12 h-12 flex items-center justify-center rounded-full bg-secClr/40 text-tetClr font-bold text-xl'>3</h3>
            <p>Review</p>
        </div>
    </div>

  );
};

export default StepsIndicator;
