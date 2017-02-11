
const chosenReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHIRT_CHOSEN":
      return {
        ...state,
        chosen: action.payload
      };
  }
  return state;
};

export default chosenReducer;
