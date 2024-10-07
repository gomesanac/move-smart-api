import axios from 'axios';
import config from '../config/env';
import { DirectionsResponse } from './directionsService.types';

interface RouteResponse {
  coordinates: string;
  duration: number;
  distance: number;
}

export const fetchRouteFromGoogle = async (
  origin: string,
  destination: string,
  mode: string
): Promise<RouteResponse> => {
  try {
    const { data } = await axios.get<DirectionsResponse>(
      `https://maps.googleapis.com/maps/api/directions/json`,
      {
        params: {
          origin,
          destination,
          mode,
          key: config.GOOGLE_API_KEY,
        },
      }
    );

    if (data.status === 'OK') {
      const route = data.routes[0];
      const { legs } = route;
      return {
        coordinates: route.overview_polyline.points,
        duration: legs[0].duration.value,
        distance: legs[0].distance.value,
      };
    } else {
      throw new Error(data.status || 'Erro ao buscar rota');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro na requisição à API do Google: ${error.message}`);
    } else {
      throw new Error('Erro desconhecido na requisição');
    }
  }
};
