import React, { useState } from 'react'
import Herosection from '../components/Shopcomponents/Herosection'
import ShopProducts from '../components/Shopcomponents/Shopproducts'
import { Outlet } from 'react-router-dom';

const Shop = () => {

  const [category, setCategory] = useState("plant"); // default to "plant"

  return (

    <>
      <Herosection setCategory={setCategory} />
      <ShopProducts category={category} />
    </>

  )
}

export default Shop
