// CategoryButtons.js
import React from "react";

function CategoryButtons({ setCategory }) {
  return (
    <div className="flex gap-5">
      <button className="bg-secClr text-pryClr p-3" onClick={() => setCategory("plant")}>Plants</button>
      <button className="bg-secClr text-pryClr p-3" onClick={() => setCategory("accessory")}>Accessories</button>
    </div>
  );
}

export default CategoryButtons;
