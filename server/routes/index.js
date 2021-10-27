// improtando el router de home
import home from './home';
// importando router de users
import userRouter from './user';

/* GET home page. */

const addRoutes = (app) => {
  app.use('/', home);
  app.use('/', userRouter);
};

export default {
  addRoutes,
};
