let initialState = {
  products: [],
  totalItems: 0
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  let tempArr = [];

  switch(type) {
  case 'ADD TO CART':
    if ( payload ) {
      if ( payload.inventory <= 0) return { products: [...state.products], totalItems: state.totalItems };
      payload.inventory--;
      payload.inCart = payload.inCart + 1;
      console.log('we are inside the reducer for CART and the payload is ===>>>', payload);
      return { products: [...state.products, payload], totalItems: state.totalItems + 1 };
      // return [...state, payload];
    } else {
      return state;
    }
  case 'REDUCE ITEM IN CART':
    if ( payload) {
      if ( payload.inCart === 1) {
        tempArr = state.products.filter(product => product.product !== payload.product);
        payload.inventory = payload.inventory + payload.inCart;
        return { products: tempArr, totalItems: state.totalItems - payload.inCart };
      } else {
        tempArr = state.products.filter(product => product.product !== payload.product);
        payload.inventory = payload.inventory + 1;
        payload.inCart = payload.inCart - 1;
        tempArr.push(payload);
        return { products: tempArr, totalItems: state.totalItems - 1 };
      }
    } else {
      return state;
    }
  case 'REMOVE FROM CART':
    if (payload) {
      tempArr = state.products.filter(product => product.product !== payload.product);
      payload.inventory = payload.inventory + payload.inCart;
      return { products: tempArr, totalItems: state.totalItems - payload.inCart };
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

export const reduceItemInCart = (product) => {
  return {
    type: 'REDUCE ITEM IN CART',
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE FROM CART',
    payload: product,
  };
};
