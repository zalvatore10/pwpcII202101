// importando raouter
import { Router } from 'express';

// importando al controlador home
import homeController from '@server/controllers/homeControllers';

// creando la instancia de un controlador
const router = new Router();

// get'/'
router.get(['/', '/index'], homeController.index);

// get'/ greeting'
router.get('/greeting', homeController.greeting);

//get  '/abaout'
router.get('/about', homeController.about);

// exportando el router que maneja las subrutas 
//para home
export default router;

