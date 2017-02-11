
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return state.slice(1, 2).concat(action.payload);
  }
  return state;
};

export default productsReducer;
