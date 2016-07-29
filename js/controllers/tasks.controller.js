class TasksController {

  init() {
    this.taskSubmitListener()
    this.hideTaskForm()
  }

  taskSubmitListener() {
    $('#task_submit').on('click', function(event) {
      event.preventDefault()
      console.log('Task Submit Listener Working')

      //build task
      let description = $('input#task_description').val()
      let priority = $('input#task_priority').val()
      var task = new Task(description, priority, 5)



      // task.build()
    })
  }

  showTaskForm() {
    $('form#add_task').show()
  }

  hideTaskForm() {
    $('form#add_task').hide()
  }

}//close class
