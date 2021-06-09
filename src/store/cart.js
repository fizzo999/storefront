let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ADD TO CART':
    if (payload.inventory <= 0) return [...state];
    payload.inventory--;
    return [...state, payload];
  default:
    return state;
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD TO CART',
    payload: product,
  };
};
