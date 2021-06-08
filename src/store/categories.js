let initialState = {
  category: [
    { name: 'Electronics', active: true},
    { name: 'Food', active: false},
    { name: 'Shoes', active: false}
  ]
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  let categoriesList = [];

  switch(type) {
  case 'CATEGORY':
    categoriesList = state.category.map(eachCategory => {
      if (eachCategory.name === payload) {
        return { name: eachCategory.name, active: true };
      } else {
        return { name: eachCategory.name, active: false };
      }
    });
    return { category: categoriesList };
  case 'RESET':
    return initialState;

  default:
    return state;
  }
};

export const categories = (productCategory) => {
  return {
    type: 'CATEGORY',
    payload: productCategory
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  };
};
