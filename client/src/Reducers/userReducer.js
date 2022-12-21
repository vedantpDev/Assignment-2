const initialState = {
  user: [],
  userName: "",
  userGender: "",
  token: "",
  userEmail: "",
  userPassword: "",
  loading: "",
  err: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOKEN_SUCCESS": {
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.name,
        userGender: action.payload.gender,
        userEmail: action.payload.email,
        userPassword: action.payload.password,

        loading: true,
      };
    }

    case "TOKEN": {
      return { ...state, loading: false };
    }

    case "TOKEN_FAIL": {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }

    case "REGISTER_DATA": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "LOG_OUT": {
      return {
        user: [],
        email: "",
      };
    }

    default:
      return state;
  }
};

export default userReducer;
