// Import  Router
import { Router } from 'express';

// Importando el controlador
import userControllers from '@server/controllers/userControllers';

// Creando la instancia del router
const router = new Router();

/* GET users listing. */
router.get('/', userControllers.index);

module.exports = router;
