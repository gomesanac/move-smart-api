import { Router } from 'express';
import { getDirections } from '../controllers/directionsController';

const router = Router();

// Definindo a rota para obter direções
router.get('/directions', getDirections);

export default router;
