export default (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload.userData,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
        token: null,
        error: action.payload.error
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
        token: null,
      };
    case "UPDATE_USER":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
