let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ADD TO CART':
    if ( payload ) {
      if ( payload.inventory <= 0) return [...state];
      payload.inventory--;
      payload.inCart = payload.inCart + 1;
      console.log('we are inside the reducer for CART and the payload is ===>>>', payload);
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
