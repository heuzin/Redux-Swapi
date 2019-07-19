import { FETCHING, SUCCESS, FAILURE } from "../actions/index";

const initialState = {
  characters: [],
  errorMessage: null,
  isLoading: false,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return { 
        ...state,
        isLoading: true,
      }
    }
    case SUCCESS: {
      const { characters } = action.payload
      return {
        ...state,
        isLoading:false,
        errorMessage: null,
        characters,
      }
    }
    case FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
      }
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
