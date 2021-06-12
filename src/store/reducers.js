let initialState = {
  products: [],
  count: 0,
  filteredProducts: [],
  data: [1, 2, 3],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // let newResults = [];
  switch(type) {
  case 'GET_ONLINE_PRODUCTS':
    // return { results: [..., payload ]};
    // newResults = state.results
    // return newResults.push(payload);
    return { products: payload.results, count: payload.count };
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
