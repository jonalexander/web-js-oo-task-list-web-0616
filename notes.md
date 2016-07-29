notes
const Store = {
    lists: [],
    tasks: []
  }

$(document).on('ready', function(){
  listSubmitListener()
  taskSubmitListener()
})


function listSubmitListener () {
  $('#list_submit').on('click', function(event) {
    event.preventDefault()

    console.log('hello')
  })
}

function taskSubmitListener() {
  $('#task_submit').on('click', function(event) {
    event.preventDefault()
    //listsController()
    console.log('goodbye')
  })
}
