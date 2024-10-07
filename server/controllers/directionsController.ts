import { Request, Response } from 'express';
import { fetchRouteFromGoogle } from '../services/directionsService';

// Controlador que lida com a lógica de buscar a rota
export const getDirections = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { origin, destination, mode } = req.query as {
    origin: string;
    destination: string;
    mode: string;
  };

  if (!origin || !destination || !mode) {
    res
      .status(400)
      .json({
        error:
          "Os parâmetros 'origin', 'destination' e 'mode' são obrigatórios",
      });
    return;
  }

  try {
    const route = await fetchRouteFromGoogle(origin, destination, mode);
    res.json(route);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido no servidor' });
    }
  }
};
