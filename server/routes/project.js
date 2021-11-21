// importando raouter
import { Router } from 'express';

// importar el controlador del proyecto
import projectController from '@server/controllers/projectController';

// importando el validator
import validate from '@server/validators/validateFactory';

// importando el esquema de validacion de projectos 
import projectValidator from '@server/validators/projectValidator';

// creando la instancia de un router
const router = new Router();

// GET "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);

// GET "/projects/add"
// "sirve el formulario para agregar proyectos"
router.get('/add', projectController.add);

//POST "/project/add"
//Procesa el formulario
router.post(
    '/add', 
    validate({
        shape: projectValidator.projectSchema,
        getObject: projectValidator.getProject,
    }),
    projectController.addPost
    );

export default router;
