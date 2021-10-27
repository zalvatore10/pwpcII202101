/* eslint-disable prettier/prettier */
import ExpHbs from 'express-handlebars';
import path from 'path';
// exportando una funcion de configuracion
export default (app) => {
  // 1.- registrar el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    }),
  );

  // 2.- seleccionar el motor de plantillas recien registrado
  app.set('view engine', 'hbs');
  // 3.- establecer ruta de vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // retornamos el valor de entrada
  return app;
};

