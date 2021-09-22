var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', author: 'Salvador', appName: 'webApp' });
});

/*AGREGANDO UNA NUEVA RUTA*/
router.get('/greeting', function(req, res, next) {
    res.status(200).json({ message: '!HOLA CAMPEON TU PUEDES CON ESTA MATERIA' })
})

module.exports = router;