import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductPage from "./components/Ex_Product/ProductPage.jsx";
import Addproduct from "./pages/admin/AddProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/dashboard";
import AdminPageLayout from "./Layout/AdminPageLayOut.jsx";
import AllProduct from "./pages/admin/AllProducts";
import PendingOrders from "./pages/admin/PendingOrders";
import AllClients from "./pages/admin/AllClients";

import { useFormik } from "formik";
import { CartProvider } from "./hooks/CartContext";
import Checkout from "./pages/Checkout.jsx";
import { Toaster } from "react-hot-toast";
import MyOrders from "./pages/myOrders.jsx";
import OrderDetails from "./components/Ordercomponents/OrderDetails.jsx";

function App() {
  const formik = useFormik({});

  return (
    <CartProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />}>
          <Route path="/myorders/:id" element={<OrderDetails />} />
        </Route>

        <Route
          path="/admin/overview"
          element={
            <AdminPageLayout
              child={<AdminDashboard />}
              pageName={"Dashboard"}
            />
          }
        />
        <Route
          path="/admin/allclients"
          element={
            <AdminPageLayout child={<AllClients />} pageName={"All Clients"} />
          }
        />
        <Route
          path="/admin/allproduct"
          element={
            <AdminPageLayout child={<AllProduct />} pageName={"All Product"} />
          }
        />
        <Route
          path="/admin/addproduct"
          element={
            <AdminPageLayout child={<Addproduct />} pageName={"Add Product"} />
          }
        />
        <Route
          path="/admin/pendingorders"
          element={
            <AdminPageLayout
              child={<PendingOrders />}
              pageName={"Orders Tab"}
            />
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className="hidden alert-container fixed z-50 top-0 left-0 bg-secClr/50 w-full h-full py-10 px-3 justify-center items-center">
        <div className="alert md:h-max lg:h-[100%] lg:w-2/5 md:w-3/4 bg-tetClr rounded-lg md:p-5 p-3 overflow-y-scroll">
          <h2 className="md:text-4xl text-2xl font-bold text-center mb-2">
            Checkout
          </h2>

          <h2 className="text-xl font-bold text-center mb-4">
            Update Information
          </h2>
          <p>
            Contact and Delievery Details are needed to initiate a checkout,
            Please fill in valid contact informations as all product will be
            shipped to the provided address.
          </p>

          <h2 className="md:text-xl text-lg font-bold text-center mb-2">
            Confirm Information
          </h2>
          <p className="text-center">
            To complete the checkout you just initiated, please crosscheck the
            details provided below as all product will be shipped to the
            provided address.
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="my-3 flex gap-2 flex-col"
          >
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                type="text"
                name="cAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border p-2 w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black resize-none"
                placeholder="Address to be delievered to"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="cTel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border p-2 w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black"
                placeholder="Contact Tel"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border p-2 w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black"
                placeholder="Contact Email"
              />
            </div>
            <button className="bg-compClr rounded-lg py-4 text-tetClr mt-5">
              Confirm Delievery Details
            </button>
          </form>
          <small className="leading-[2px] text-xs">
            <strong>Disclaimer: </strong>Petal Power will not be responsible for
            any unrecevied product due to a wrong provided address!
          </small>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
