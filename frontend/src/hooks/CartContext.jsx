import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Retrieve products from localstorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(savedCart);
  }, []);

  // Save products to localstorage on add to cart
  localStorage.setItem("Products List", JSON.stringify([...cartProducts]));

  const addToCart = (product) => {

    // Check if product exists in the ls
    const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    // If product exists in the ls, then update quantity...
    if (existingProduct) {
        incrementQuantity(product.id);
    } else {
      // ...else create a new entry
      const newProduct = {
          ...product,
          quantity: 1,
          basePrice: product.price,
      };
      const updatedCart = [...cart, newProduct];
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      setCartProducts(updatedCart);
    }
  };


  // Increment products
  const incrementQuantity = (id) => {
    const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const updatedCart = cart.map(product => {
        if (product.id === id) {
            const updatedQuantity = product.quantity + 1;
            return {
                ...product,
                quantity: updatedQuantity,
                price: (product.basePrice * updatedQuantity).toFixed(2), // Update product price on increment
            };
        }
        return product;
    });
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCartProducts(updatedCart); // Update state
  };

  // Decrement products
  const decrementQuantity = (id) => {
      const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
      const updatedCart = cart.map(product => {
          if (product.id === id && product.quantity > 0) {
              const updatedQuantity = product.quantity - 1;
              return {
                  ...product,
                  quantity: updatedQuantity,
                  price: (product.basePrice * updatedQuantity).toFixed(2), // Update price when decreased
              };
          }
          return product;
      }).filter(product => product.quantity > 0); // Remove items with quantity 0
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      setCartProducts(updatedCart); // Update state
  };


  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
