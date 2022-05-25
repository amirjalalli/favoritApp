const initialState = {
  items: [],
};

function userFavoirt(state = initialState, action) {
  switch (action.type) {
    case "fetchList":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export default userFavoirt;
