import React from 'react';

const StepsIndicator = ({ currentStep }) => {

  return (

    <div className="flex justify-between">
        <div className={`flex flex-col items-center ${currentStep > 0 ? "firstIndicator active" : null}`}>
            <h3 className={`w-12 h-12 flex items-center justify-center border-2 border-pryClr rounded-full ${ currentStep > 0 ? "bg-secClr active" : currentStep == 0 ? "bg-secClr" : "bg-[#979797]"} text-tetClr font-bold text-xl`}>1</h3>
            <p>Shipping Info</p>
        </div>
        <div className={`flex flex-col items-center ${currentStep > 1 ? "firstIndicator active" : null}`}>
            <h3 className={`w-12 h-12 flex items-center justify-center border-2 border-pryClr rounded-full ${ currentStep > 1 ? "bg-secClr active" : currentStep == 1 ? "bg-secClr" : "bg-[#979797]"} text-tetClr font-bold text-xl`}>2</h3>
            <p>Review Order</p>
        </div>
        <div className="relative z-10 flex flex-col items-center">
            <h3 className={`relative z-10 w-12 h-12 flex items-center justify-center border-2 border-pryClr rounded-full ${ currentStep == 2 ? "bg-secClr" : "bg-[#979797]"} text-tetClr font-bold text-xl`}>3</h3>
            <p>Payment</p>
        </div>
    </div>

  );
};

export default StepsIndicator;
