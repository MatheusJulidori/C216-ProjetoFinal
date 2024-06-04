import express from 'express';
import { createCarro, deleteCarro, getCarroById, getCarros, updateCarro } from '../controllers/carro.js';

const router = express.Router();

router.get('/carro', getCarros);

router.get('/carro/:id', getCarroById);

router.post('/carro', createCarro);

router.put('/carro/:id', updateCarro);

router.delete('/carro', deleteCarro);

export default router;