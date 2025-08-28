import { Router } from 'express';
import LeadController from '../controller/leadController.js';
import validarLead from '../middleware/validarLead.js';

const router = Router();

router.get('/usuarios', validarLead, LeadController.listarLead);

router.post('/usuarios', validarLead, LeadController.criarLead);

router.put('/usuarios/:id', validarLead, LeadController.atualizarLead);

router.delete('/usuarios/:id', validarLead, LeadController.deletarLead);

export default router;