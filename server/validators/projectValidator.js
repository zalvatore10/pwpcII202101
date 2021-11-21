//importando la biblioteca de validacion
import * as Yup from 'yup';

//creando el esquema de vaidación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('se requiere nombre'),
  descripcion: Yup.string()
    .max(500, 'la descripcion esta lmitada a 500 caracteres')
    .required('se requiere una descripcion'),
});

//creando el middleware que realizara la validacion
const getProject = (req) => {
  //extraemos los datos del formulario del cuerpo de la peticion
  const { name, descripcion } = req.body;
  //regresamos un objeto project formado por los datos del formulario
  return {
    name,
    descripcion,
  };
};

export default {
  getProject,
  projectSchema,
};
