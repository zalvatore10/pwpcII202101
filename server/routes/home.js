// Import  Router
import { Router } from 'express';

// Importado al controlador Home
import homeControllers from '@server/controllers/homeControllers';

//Creando la instancia de un router
const router = new Router();

// Get '/'
router.get('/', homeControllers.index);

// Get '/greeting/
router.get('/greeting', homeControllers.greeting);

// Exportando el router que maneja las subrutas
// para el controlador home

export default router;
