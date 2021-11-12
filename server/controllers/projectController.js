// actions methods
// "/projects" "/projects/index"
const index = (req, res) => {
  res.send('Respondiendo a "/projects/index"');
};

// "/projects/add"
const add = (req, res) => {
  res.send('Respondiendo a "/projects/add"');
};

// pendiente por programar
export default {
  add,
  index,
};
