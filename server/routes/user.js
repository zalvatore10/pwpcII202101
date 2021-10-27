import { Router } from 'express';
// importar controlador
import userController from "@server/controllers/userController";

// creando instancia de router
const router = new Router();
/* GET users listing. */
router.get('/user', userController.index);

export default router;
