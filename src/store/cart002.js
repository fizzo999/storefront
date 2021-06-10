let initialState = {
  cart: [],
};

export default function CartReducerFunction(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
  case 'ADD_TO_CART':
    return { ...state, cart: [ ...state.cart, payload] };
  case 'REMOVE FROM CART':
    let tempCart = [...state.cart];
    let deletedOneItem = false;
    let updatedCart = tempCart.filter((item) => {
      if (item === payload && !deletedOneItem) {
        deletedOneItem = true;
        return false;
      } else {
        return true;
      }
    });
    return { ...state, cart: [...updatedCart]}
  default:
    return state;  
  };
};

export function addToCart(productName) {
  return {
    type: 'ADD_TO_CART',
    payload: productName,
  };
};

export function removeFromCart(productName) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productName,
  };
};
