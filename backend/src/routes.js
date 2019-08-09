const express = require('express');
const routes = express.Router();


const DislikeController = require('./controllers/DislikeController');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
//const DislikeController = require('./controllers/DislikeController');

//GET
// routes.get('/', (req, res) => {
//   return res.json({ message: `Hello ${req.query.name}` });
// });
routes.get('/devs', DevController.index);

//POST
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
//routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;