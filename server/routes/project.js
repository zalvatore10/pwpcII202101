// importando raouter
import { Router } from 'express';

// importar el controlador del proyecto
import projectController from '@server/controllers/projectController';

// creando la instancia de un router
const router = new Router();

// "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);

// "/projects/add"
// "sirve el formulario para agregar proyectos"
router.get('/add', projectController.add);

export default router;
