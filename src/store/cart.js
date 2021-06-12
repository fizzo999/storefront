let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ADD TO CART':
    if ( payload ) {
      if ( payload.inventory <= 0) return [...state];
      payload.inventory--;
      return [...state, payload];
    } else {
      return state;
    }
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
