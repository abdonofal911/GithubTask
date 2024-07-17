// reducers/repositories.js
import {
  GET_TOP_REPOSITORIES_REQUEST,
  GET_TOP_REPOSITORIES_SUCCESS,
  GET_TOP_REPOSITORIES_FAILURE,
  GET_REPOSITORIES_REQUEST,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAILURE,
} from '../../actions/repositories';

const initialState = {
  repositories: [],
  topRepositories: [],
  getRepositoriesLoader: false,
  getTopRepositoriesLoader: false,
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_REQUEST:
      return {...state, getRepositoriesLoader: true};
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload.items,
        getRepositoriesLoader: false,
      };
    case GET_REPOSITORIES_FAILURE:
      console.log('getAllRepositories.rejected', action.payload.response);
      return {...state, getRepositoriesLoader: false};

    case GET_TOP_REPOSITORIES_REQUEST:
      return {...state, getTopRepositoriesLoader: true};
    case GET_TOP_REPOSITORIES_SUCCESS:
      return {
        ...state,
        topRepositories: action.payload.items,
        getTopRepositoriesLoader: false,
      };
    case GET_TOP_REPOSITORIES_FAILURE:
      console.log('getTopRepositories.rejected', action.payload.response);
      return {...state, getTopRepositoriesLoader: false};

    default:
      return state;
  }
};

export default repositoriesReducer;
