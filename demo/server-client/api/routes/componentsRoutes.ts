'use strict';

import dynamics = require('../controllers/componentsController');

export function startApp(app) {
  
  // todoList Routes
  app.route('/components')
    .get(dynamics.list_all_tasks);


  app.route('/components/:componentId')
    .get(dynamics.read_a_task)
    .put(dynamics.update_a_task)
    .delete(dynamics.delete_a_task);
};