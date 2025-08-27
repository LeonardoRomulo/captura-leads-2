import { Router } from 'express';
import LeadController from '../controller/leadController.js';

const router = Router();

router.get('/usuarios', LeadController.listarLead);

router.post('/usuarios', LeadController.criarLead);

router.put('/usuarios/:id', LeadController.atualizarLead);

router.delete('/usuarios/:id', LeadController.deletarLead);

export default router;