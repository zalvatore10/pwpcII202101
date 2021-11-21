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
  const { validData: project } = req;
  res.status(200).json(project);
};

// pendiente por programar
export default {
  add,
  addPost,
  index,
};
