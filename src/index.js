const datepicker = require('js-datepicker')

class ToDo {
  constructor(title, description, dueDate, priority, project = 'default') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this project = project;
  }
}

class Project {
  constructor(name) {
    this.name = name;
  }
}

let todo = new ToDo()