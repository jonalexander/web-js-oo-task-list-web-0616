const Task = (function() {
  var counter = 0

  return class {
    constructor(description, priority, list_id) {
      this.id = counter++
      this.description = description
      this.priority = priority
      this.list_id = list_id
      console.log("item create" + this.description)
      Store.tasks.push(this)
    }

    // build() {
    //   let listContainers = $('#lists').children()
    //   for (let i = 0; i < listContainers.length, i++) {
    //     console.log(listContainers[i].val());
    //   }
  }//class
}())
