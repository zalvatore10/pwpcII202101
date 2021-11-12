// improtando el router de home
import homeRouter from './home';
// importando router de users
import userRouter from './user';
// Importando router de projects
import projectRouter from './project';

// agrgando la ruta a la aplicacion
const addRoutes = (app) => {
  //home router
  app.use('/', homeRouter);

  //project router
  app.use('/projects', projectRouter);

  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
};
