import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSix from "../../components/card/CardSix";
import { FaArrowsRotate, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const api = import.meta.env.VITE_API_BASE_URL;

const AllProduct = () => {

  const [allProducts, setProducts] = useState([])
  const [startEdit, setStartEdit] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${api}/product/allproducts`)
        if (response.status == 200 ) {
          toast.success(response.data.message)
          setProducts(response.data.data)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center">
      <span className="w-28 h-28 p-3 block border-[10px] border-t-transparent border-compClr rounded-full animate-spin"></span>
    </div>;
  }
  
  const handleProductDeletion = (productId, productName) => {
    console.log(productId)
    axios.delete(`${api}/product/deleteproduct/${productId}`)
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
        toast.success(`${productName} deleted successfully`);
        setProducts(currentProducts => currentProducts.filter((product) => product.prodId !== productId));
      } else {
        toast.error(response.data.message);
      }
    })
    .catch(error => {
      console.error('Failed to delete product:', error.message);
      toast.error('Failed to delete product');
    })
  }
  
  const handleProductEdit = (productDetails) => {
    setSelectedProduct(productDetails)
    console.log("selectedProduct selectedProduct", selectedProduct)
    setStartEdit(true)
  }

  const productDetails = selectedProduct;
  
  const formik = useFormik({
    initialValues: {
      prodId: productDetails.prodId,
      category: productDetails.category,
      name: productDetails.name,
      description: productDetails.description,
      image: productDetails.image,
      quantity: productDetails.quantity,
      price: productDetails.price,
    },
    validationSchema: {
      prodId: Yup.string()
        .required("Product Id is required!.")
        .matches(/^[A-Za-z0-9]*$/, 'Product Id must be alphanumeric'),
      category: Yup.string().required("Category is required!."),
      name: Yup.string()
        .required("Name is required!."),
      description: Yup.string()
        .required("Description is required!."),
      image: Yup.string()
        .required("Image is required!."),
      quantity: Yup.number()
        .required("Quantity is required!."),
      price: Yup.number()
        .moreThan(0, "Price must be greater than 0")
        .required("Price is required!."),
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("values", values)
      console.log("productDetails", productDetails)
      setSubmitting(true)
    }
  })

  return (

    <>
      <div className="text-end mt-10">
        <button 
          className="flex gap-2 items-center justify-end bg-compClr text-pryClr px-3 rounded-full border-2 border-secClr h-[40px] ms-auto"
          onClick={() => fetchProducts()}
        >
          <span>Refresh</span>
          <span><FaArrowsRotate/></span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 justify-center items-center min-h-max pb-5">
        {
          allProducts.map((product, index) => (
            <CardSix 
              key={product._id+index}
              image={`http://localhost:5000${product.image}`}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              icon1={<FaEdit />}
              cta1={"Edit product details"}
              icon2={<FaTrash />}
              cta2={"Delete product"}
              action1={() => handleProductEdit(product)}
              action2={() => handleProductDeletion(product.prodId, product.name)}
            />
          ))
        }
      </div>

      {
        selectedProduct && (
          <div className={`modal p-5 fixed z-50 left-0 top-0 lg:-translate-x-[24.7%] -translate-x-[0%] w-screen h-screen overflow-y-scroll py-10 bg-compClr/70 px-5 ${startEdit ? "flex" : "hidden"} items-center justify-center`}>
            <div className="bg-tetClr p-5 lg:w-1/2 md:w-3/4 w-full mt-8 rounded-md drop-shadow-2xl">
              <form className="flex flex-wrap justify-between" onSubmit={formik.handleSubmit}>
                <h3 className="font-bold text-2xl w-full mb-5">Update Product Info</h3>
                <div className="md:w-[48%] w-full mt-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="prodId">Product Id</label>
                  <input 
                      type="text" 
                      name="prodId" 
                      id="prodId" 
                      readOnly
                      value={formik.values.prodId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full focus:ring-0 opacity-50 bg-pryClr/30 cursor-not-allowed rounded-sm focus:border-black" 
                  />
                  {formik.errors.prodId ? (
                      <div className="text-red-500 text-sm">{formik.errors.prodId}</div>
                  ) : null}
                </div>
                <div className="md:w-[48%] w-full mt-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="category">Product Category</label>
                  <input 
                      type="text" 
                      name="category" 
                      id="category" 
                      readOnly
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full capitalize focus:ring-0 opacity-50 bg-pryClr/30 cursor-not-allowed rounded-sm focus:border-black" 
                  />
                  {formik.errors.category ? (
                      <div className="text-red-500 text-sm">{formik.errors.category}</div>
                  ) : null}
                </div>
                <div className="md:w-[48%] w-full my-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Product Name</label>
                  <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  {formik.errors.name ? (
                      <div className="text-red-500 text-sm">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="md:w-[48%] w-full my-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="price">Product price</label>
                  <input 
                      type="number" 
                      name="price" 
                      id="price" 
                      min={1}
                      className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  {formik.errors.price ? (
                      <div className="text-red-500 text-sm">{formik.errors.price}</div>
                  ) : null}
                </div>
                <div className="md:w-[48%] w-full my-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="quantity">Product Quantity</label>
                  <input 
                      type="number" 
                      name="quantity" 
                      id="quantity" 
                      min={1}
                      className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  {formik.errors.quantity ? (
                      <div className="text-red-500 text-sm">{formik.errors.quantity}</div>
                  ) : null}
                </div>
                <div className="md:w-[48%] w-full my-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="image">Product Image</label>
                  <input 
                      type="file" 
                      name="image" 
                      id="image" 
                      className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                      // value={formik.values.image}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                  />
                  {formik.errors.image ? (
                      <div className="text-red-500 text-sm">{formik.errors.image}</div>
                  ) : null}
                </div>
                <div className="w-full my-2">
                  <label className="block text-sm font-medium mb-2" htmlFor="description">Product Description</label>
                  <textarea 
                    name="description" 
                    id="description"
                    rows={4}
                    className="w-full focus:ring-0 resize-none bg-pryClr/30 rounded-sm focus:border-black" 
                    value={formik.values.description} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </textarea>
                  {formik.errors.description ? (
                      <div className="text-red-500 text-sm">{formik.errors.description}</div>
                  ) : null}
                </div>
                <div className="flex flex-row justify-between mt-3 w-full">
                  <button
                    type="button"
                    onClick={() => setStartEdit(false)}  
                    className="btn w-1/3 rounded-md bg-red-600 text-tetClr transition-all duration-200"
                  >Cancel</button>
                  <button
                    type="submit"
                    onClick={() => setStartEdit(false)}  
                    className="btn w-3/5 h-12 rounded-md drop-shadow-lg bg-compClr text-tetClr transition-all duration-200"
                    disabled={formik.isSubmitting}
                  >
                    {
                      formik.isSubmitting ? "Updating Info..." : "Update Info"
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </>

  );
};

export default AllProduct;
