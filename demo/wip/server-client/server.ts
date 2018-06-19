import express = require('express');
import routes = require("./api/routes/componentsRoutes")
var app = express();
var port = process.env.PORT || 3000;

app.listen(port);
routes.startApp(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);

