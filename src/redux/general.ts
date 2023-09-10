import {AxiosError, AxiosResponse} from 'axios';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

export type IRequestStatus =
  (typeof REQUEST_STATUS)[keyof typeof REQUEST_STATUS];

export interface IGeneralState<T> {
  requests: {[key in keyof T]: IRequestStatus};
}

export const getApiErrorMessage = (
  response: AxiosResponse,
  fallback: string,
) => {
  const axiosError = response as unknown as AxiosError;
  return axiosError.message || fallback;
};
