const express = require('express');
const routes = express.Router();

const ApiController = require('./controllers/ApiController');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

//GET
routes.get('/wadl', ApiController.wadl);
routes.get('/', (req, res) => {
  var name = req.query.name ? req.query.name : 'World';
  var message = `Hello ${name}`;
  if (req.query.name) {
    return res.json({ message: message });
  } else {
    return res.send(message);
  }
});
routes.get('/devs', DevController.index);

//POST
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;