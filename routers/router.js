import { Router } from 'express';
import LeadController from '../controller/leadController.js';

const router = Router();

router.get('/leads', LeadController.listarLead);

router.post('leads', LeadController.criarLead);

export default router;