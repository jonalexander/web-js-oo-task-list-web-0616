class TasksController {

  init() {
    this.taskSubmitListener()
  }

  taskSubmitListener() {
    $('#task_submit').on('click', function(event) {
      event.preventDefault()
      console.log('Task Submit Listener Working')
      //create task

    })
  }

}
  // let description = $('input#task_description').val()
  // let priority = $('input#task_priority').val()
  //
  // //assign task's list_id to current list selected in dropdown
  // var parentListName = $('#select_list :selected').text()
  // var parentList = store.lists.find( (list) => {list.title === parentListName})
  // new Task(description, priority, parentList.id)
  //
  // $('#lists').append(`<div class="list"><h2><button class="destroy-list">x</button><br> ${listObj.title}</h2></div>`)
