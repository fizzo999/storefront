let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'A Collection of the most advanced Electronics', active: true},
    { name: 'books', displayName: 'Books', description: 'A Collection of the most inspirational Reads', active: false},
    { name: 'clothes', displayName: 'Clothes', description: 'A Collection of the most stylish Clothes', active: false}
  ],
  activeCategory: '',
  activeDescription: 'A selection of the finest products',
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  // let activeCategory = payload;
  let newActiveDescription, revisedActiveDescription;

  switch (type) {
  case 'SELECT CATEGORY':
    newActiveDescription = state.categories.map(eachCat => eachCat.name === payload ? eachCat.description : '');
    revisedActiveDescription = payload === '' ? initialState.activeDescription : newActiveDescription;
    return { categories: [...state.categories], activeCategory: payload, activeDescription: revisedActiveDescription};

  case 'GET CATEGORIES':
    return state;

  default:
    return state;
  }
};


export const selectCategory = (category) => {
  return {
    type: 'SELECT CATEGORY',
    payload: category
  };
};

export const getCategories = () => {
  return {
    type: 'GET CATEGORIES'
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  };
};
