//Used to manage the context data and provide this data to the components that need it

import CartContext from './cart-context';

const addItemToCartHandler = (item) => {};

const removeItemFromCartHandler = (id) => {};

const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
};

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
