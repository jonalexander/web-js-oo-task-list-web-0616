var Task = (function() {
  var counter = 0

  return class {
    constructor(description, priority, list_id) {
      this.id = counter++
      this.description = description
      this.priority = priority
      this.list_id = list_id
      store.tasks.push(this)
    }
  }
}())
