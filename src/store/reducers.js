let initialState = {
  products: [],
  // count: 0,
  // filteredProducts: [],
  // data: [1, 2, 3],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // let newResults = [];
  console.log('here is the state in the reducer', state);
  switch(type) {
  case 'GET_ONLINE_PRODUCTS':
    console.log('we are in online GET PRODUCTS and here is body', payload.body);
    return { products: payload.body.products};
  case 'POST_ONLINE_PRODUCTS':
    return 'SOMETHING';
  case 'PUT_ONLINE_PRODUCTS':
    return 'SOMETHING';
  case 'DELETE_ONLINE_PRODUCTS':
    return 'SOMETHING';
  default:
    return state;
  }
};
