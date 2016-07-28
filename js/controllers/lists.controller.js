class ListsController {

  constructor( ) {
    //
  }

  init() {
    this.listSubmitListener(); //add listener
  }

  listSubmitListener() {
    $('#list_submit').on('click', function(event) {
      event.preventDefault()
      console.log('List Submit Working')

      let title = $('input#list_title').val()
      var list = new List(title)
      list.build()

    })
  }
}
  // let title = $('input#list_title').val()
  // var list = new List(title)
  //
  // //render dropdown -- refactor into IIFE
  //   var $select = document.getElementById('select_list')
  //   var lists = store.lists
  //
  //   listObj = lists[lists.length - 1]
  //   var optionTag = document.createElement("option")
  //   optionTag.textContent = listObj.title
  //   optionTag.value = listObj
  //   $select.appendChild(optionTag)
  //
  // //create box for each list
  //   $('#lists').append(`<div class="list"><h2><button class="destroy-list">x</button><br>${listObj.title}</h2></div>`)
