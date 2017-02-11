
const initialState = {
  Past: [],
  Present: []
};

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LEAGUE_SUCCESS":
      return {
        ...state,
        Past: state.Present.length === 0 ? action.payload : state.Present,
        Present: action.payload,
        PastOrder: state.Present.length === 0
        ? action.payload.map(product => product.ID) : state.Past.map(product => product.ID),
        PresentOrder: action.payload.map(product => product.ID)
      };
  }
  return state;
};

export default leagueReducer;
