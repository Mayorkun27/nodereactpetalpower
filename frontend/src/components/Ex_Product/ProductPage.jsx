import React, { useState } from "react";
import CategoryButtons from "./CategoryButtons";
import ProductList from "./ProductList";

function ProductPage() {
  // State to track selected category
  const [category, setCategory] = useState("plant"); // default to "plant"

  return (
    <div>
      {/* Buttons to select category */}
      <CategoryButtons setCategory={setCategory} />
      {/* List of products based on selected category */}
      <ProductList category={category} />
    </div>
  );
}

export default ProductPage;
