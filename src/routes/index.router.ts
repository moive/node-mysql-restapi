import { Router } from 'express';
import { home } from '../controllers/index.controller';

const router = Router();

router.get('/', home);

export { router as indexRouter };
