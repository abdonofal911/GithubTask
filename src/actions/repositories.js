import {API} from '../apis';

export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_FAILURE = 'GET_REPOSITORIES_FAILURE';

export const GET_TOP_REPOSITORIES_REQUEST = 'GET_TOP_REPOSITORIES_REQUEST';
export const GET_TOP_REPOSITORIES_SUCCESS = 'GET_TOP_REPOSITORIES_SUCCESS';
export const GET_TOP_REPOSITORIES_FAILURE = 'GET_TOP_REPOSITORIES_FAILURE';

export const getTopRepositories = count => async dispatch => {
  dispatch({type: GET_TOP_REPOSITORIES_REQUEST});
  try {
    const response = await API.get(
      `/search/repositories?q=stars&sort=stars&per_page=${count}`,
    );
    dispatch({type: GET_TOP_REPOSITORIES_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: GET_TOP_REPOSITORIES_FAILURE, payload: error});
  }
};
export const getRepositories = (date, language) => async dispatch => {
  const dateString = date.toISOString().slice(0, 10);
  let url =
    language === 'any'
      ? `search/repositories?q=created:>${dateString}&&sort=stars&order=desc`
      : `/search/repositories?q=language:${language}&created:>${dateString}&&sort=stars&order=desc`;
  dispatch({type: GET_REPOSITORIES_REQUEST});
  try {
    const response = await API.get(url);
    dispatch({type: GET_REPOSITORIES_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({type: GET_REPOSITORIES_FAILURE, payload: error});
  }
};
