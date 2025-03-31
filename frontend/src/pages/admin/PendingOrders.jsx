import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSeven from "../../components/card/CardSeven";
import ButtonTwo from "../../components/Button/Buttontwo";
import toast from "react-hot-toast";


const PendingOrders = () => {

  const [orders, setOrders] = useState([])
  const [category, setCategory] = useState("all")
  const [isLoading, setIsLoading] = useState("")

  function showAllOrdersAction() {
      setCategory("all");
      
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
  }
  
  function showPendingOrdersAction() {
      setCategory("pending");

      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
  }

  function showCompletedOrdersAction() {
      setCategory("completed");

      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
  }

  const filteredOrder = orders.filter((order) => order.orderStatus === category)

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get("http://localhost:5000/api/v1/order/allorders ")
      console.log(response)
      if (response.status == 200) {
          setTimeout(() => {
            toast.success(response.data.message)
            setOrders(response.data.data)
          }, 4000)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }
  }

  useEffect(() => {

    fetchOrders()
  }, [])

  const handleOrderCompletion = (orderId) => {
    // setDeletingLect(true);
    console.log(orderId)
    axios.post(`http://localhost:5000/api/v1/order/completeorder/${orderId}`)
      .then(response => {
          console.log(response);
          if (response.status === 200) {
            toast.success(response.data.message);
            fetchOrders()
          } else {
            toast.error(response.data.message);
          }
      })
      .catch(error => {
          console.error('Failed to complete order:', error.message);
          toast.error('Failed to complete order');
      })
      // .finally(() => setDeletingLect(false));
  }


  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center">
      <span className="w-28 h-28 p-3 block border-[10px] border-t-transparent border-compClr rounded-full animate-spin"></span>
    </div>
  }

  return (

    <>
      <div className="flex justify-between overflow-hidden border-2 w-full border-secClr list-none mt-8 p-0 rounded-full text-center transition-all cursor-pointer">
        <ButtonTwo title={"All Orders"} optStyle={`text-secClr w-1/2 rounded-none ${category === "all" ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => showAllOrdersAction()} />
        <ButtonTwo title={"Pending Orders"} optStyle={`text-secClr w-1/2 rounded-none ${category === "pending" ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => showPendingOrdersAction()} />
        <ButtonTwo title={"Completed Orders"} optStyle={`text-secClr w-1/2 rounded-none ${category === "completed" ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => showCompletedOrdersAction()} />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 justify-center items-center min-h-max">
        {
          category === "all" ? (
            orders.map(({ orderId, clientId, clientName, clientEmail, clientTel, clientAddress, prodId, prodName, prodDesc, prodPrice, prodQuan, prodCategory, orderStatus}, index) => (
              <CardSeven 
                key={index}
                ordStatus={orderStatus}
                cName={clientName}
                cTel={clientTel}
                cAddress={clientAddress}
                pName={prodName}
                pDescription={prodDesc}
                pPrice={prodPrice}
                pQuantity={prodQuan}
                action2={() => handleOrderCompletion(orderId)}
              />
            ))
          ) : (
            filteredOrder.map(({ orderId, clientId, clientName, clientEmail, clientTel, clientAddress, prodId, prodName, prodDesc, prodPrice, prodQuan, prodCategory, orderStatus}, index) => (
              <CardSeven 
                key={index}
                ordStatus={orderStatus}
                cName={clientName}
                cTel={clientTel}
                cAddress={clientAddress}
                pName={prodName}
                pDescription={prodDesc}
                pPrice={prodPrice}
                pQuantity={prodQuan}
                action2={() => handleOrderCompletion(orderId)}
              />
            ))
          )
          
        }
      </div>
    </>

  );
};

export default PendingOrders;
