import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCollection } from './get-collection';
import { mapToCollection } from '../../common/mappers';
import { CONSTANTS, ENDPOINTS_DEF } from '../env';



export const baseUrl = CONSTANTS.API_BASE_URL;


export type MapFromApiToVm<AM, VM> = (AM: AM) => VM;

export const useGeneralApiCollection = <AM, VM>(config: {
  mapFromApiToVm: MapFromApiToVm<AM, VM>;
  endPoint: string;
}) => {
  const { mapFromApiToVm, endPoint } = config;
  const [collection, setCollection] = React.useState<VM[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const navigate = useNavigate();

  const loadCollection = (searchParams: string = '') => {
    getCollection<AM>(searchParams, endPoint)
      .then((data) => {
        setCollection(mapToCollection(data, mapFromApiToVm));
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error('Error fetching data:', error);
        navigate('/error', { state: { errorMessage: error.message } });
      });
  };

  return {
    collection,
    loadCollection,
    errorMessage,
  };
};

export interface ApiResponse<T> {
  results: T[];
}