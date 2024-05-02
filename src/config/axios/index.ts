// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = AxiosRequestConfig & {
  contentType?: string;
};

export const fetchRequest = async (request: RequestConfig) => {
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'Content-type': request.contentType
          ? request.contentType
          : 'application/json',
      },
      withCredentials: false,
      ...request,
    });
    return { response: response.data };
  } catch (error) {
    if (error.response) {
      return { error: error?.message };
    }
  }
};
