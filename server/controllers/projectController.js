// actions methods
// "/projects" "/projects/index"
const index = (req, res) => {
  res.send('Respondiendo a "/projects/index"');
};

// GET "/projects/add"
// enviar el formulario para crear nuevas ideas
//de proyectos
const add = (req, res) => {
  res.render('project/addview');
};

// POST "/projects/add"
const addPost = (req, res) => {
  //rescatando la informacion del formulario
  const { validData, errorData } = req;
  // creando views models
  let project = {};
  let errorModel = {};
  //verificamos si hay errores
  if (errorData) {
    //rescatando objeto validado
    project = errorData.value;
    //usamos reduce para generar
    //un objeto de errores
    //apartir del arreglo inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      //creamos una variable temporal para evitar
      //el error "no-param-reassing"
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    project = validData;
  }
  res.render('project/addview', { project, errorModel });
};

// pendiente por programar
export default {
  add,
  addPost,
  index,
};
