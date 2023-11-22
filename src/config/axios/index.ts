// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from 'axios';


export const fetchRequest =
  request => success => failed => async dispatch => {
    axios({
      method: 'GET',
      headers: {
        'Content-type': request.contentType
          ? request.contentType
          : 'application/json',
      },
      withCredentials: false,
      ...request,
    })
      .then(async response => {
        dispatch(success({ response: response.data }));
      })
      .catch(error => {
        if (error.response) {
          dispatch(failed({ error: error?.response.data }));
        } else {
          dispatch(failed({ error: error?.message }));
        }
      });
  };