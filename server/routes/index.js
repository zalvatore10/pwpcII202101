// Importando el router home
import homeRouter from './home';
// Importando router de user
import userRouter from './users';

// Agregando  las rutas de aplicacion 
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/users', userRouter);
  return app;
};

export default {
  addRoutes,
};
