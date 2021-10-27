const index = (req, res) => {
  res.render('home/index', {
    title: 'ProyectNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: 'hola campeon tu puedes con esta materia',
  });
};

const about = (req, res) => {
  res.render('home/about', { tittle: 'Acerca de projnotes' });
};

export default {
  index,
  greeting,
  about,
};
