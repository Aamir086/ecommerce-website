import { createContext, useContext, useState } from "react";

// const initialState = {
//   cart: [],
//   cartItemCount: () => 0,
//   addToCart: () => null,
//   removeFromCart: () => null,
//   increaseQuantity: () => null,
//   decreaseQuantity: () => null,
// };

const CartContext = createContext();

const useCart = () => useContext(CartContext); // custom hook

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartItemCount = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product) => {
    const productIdx = cart.findIndex((item) => item.product.id === product.id);
    if (productIdx !== -1) {
      increaseQuantity(product.id);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => setCart(cart.filter((item) => item.product.id !== productId));

  const updateCartItemQuantity = (productId, change) => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity + change };
        }
        return item;
      })
    );
  };

  const increaseQuantity = (productId) => updateCartItemQuantity(productId, 1);

  const decreaseQuantity = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(productId, -1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
