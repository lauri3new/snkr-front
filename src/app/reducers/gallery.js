
const galleryReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GALLERY_SUCCESS":
      return state.concat(action.payload);
  }
  return state;
};

export default galleryReducer;
