const Store = {
    lists: [],
    tasks: []
  };

$(function() { // on document ready
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();
});
