//usando el patron factory para la creacion
//del middleware de validacion
const validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    //construyendo el objeto del validador
    const dataObject = getObject(req);
    //se realiza el proceso de validacion
    try {
      //se valida el objeto
      const validData = await shape.validate(dataObject, { abortEarly: false });
      //se inyecta el objeto validado de la peticion
      req.validData = validData;
    } catch (error) {
      //en caso de error agregar el objeto de error de yub
      // en la peticion
      req.errorData = error;
    }
    //se invoca le siguiente middleware de la cadena
    return next();
  };

//exportando el validador
export default validator;
