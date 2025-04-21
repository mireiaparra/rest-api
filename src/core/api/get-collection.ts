import Axios, { AxiosError } from 'axios';
import { ApiResponse, baseUrl } from './api-collection-hook';
import { ENDPOINTS_DEF } from '#core/env';
import { Character } from '#pods/character/api';


export const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};

export const getCollection = async <AM>(
  searchParams: string = '',
  endPoint:string,
  pageNumber: number = 1,
): Promise<Character[]> => {
  try {
    const { data } = await Axios.get(
      `${baseUrl}${ENDPOINTS_DEF[endPoint]}/?page=${pageNumber}${searchParams ? `&${searchParams}` : ''}`
    );
    return data;
  } catch (error) {
    if (isNotFoundError(error)) {
      console.log('Not found');
      throw undefined;
    }
    throw error;
  }
};

