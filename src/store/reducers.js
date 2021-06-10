let initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;
  // let newResults = [];
  switch(type) {
  case 'GET_ONLINE_PRODUCTS':
    // return { results: [..., payload ]};

    // newResults = state.results
    // return newResults.push(payload);
    return [...state.results, payload ];
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
