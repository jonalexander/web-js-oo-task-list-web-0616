const List = (function() {
  var counter = 0

  return class {
    constructor(title) {
      this.title = title
      this.id = counter++
      this.tasks = []
      console.log("item create with title " + title)
      Store.lists.push(this)
    }

    build() {
      this.renderDropdown()
      this.renderListContainer()
    }

    renderListContainer() {
      $('#lists').append(`<div class="list"><h2><button class="destroy-list">x</button><br>${this.title}</h2></div>`)
    }

    renderDropdown() {
      var select = document.getElementById('select_list')
      var lists = Store.lists
      var listObj = lists[lists.length - 1]
      var optionTag = document.createElement("option")
      optionTag.textContent = listObj.title
      optionTag.value = listObj
      select.appendChild(optionTag)
    }
  }//close return class

}())//close List



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
