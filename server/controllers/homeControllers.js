const index = (req, res) => {
  res.render('index', {
    title: 'ProjNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: '!HOLA CAMPEON TU PUEDES CON ESTA MATERIA',
  });
};

export default {
  index,
  greeting,
};
