import { FETCHING, SUCCESS, FAILURE } from "../actions/index";

const initialState = {
  characters: [],
  errorMessage: null,
  fetching: false,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return { 
        ...state,
        fetching: true,
      }
    }
    case SUCCESS: {
      return {
        ...state,
        characters: action.payload.results,
        fetching: false,
        errorMessage: null,
      }
    }
    case FAILURE: {
      return {
        ...state,
        fetching: false,
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
