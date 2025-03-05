// ProductList.js
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductList({ category }) {
  
  // Mock data for example purposes
  const allProducts = {
    plant: ["Aloe Vera", "Snake Plant", "Fiddle Leaf Fig"],
    accessory: ["Watering Can", "Plant Stand", "Potting Soil"],
  };

  // Display products based on the selected category
  const products = allProducts[category];

  return (
    <div>
      <h2 className="text-secClr text-2xl">Showing {category} products:</h2>
      <ul>
        {
          products.map((product) => (
            <li key={product}>{product}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProductList;
