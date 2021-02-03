const toDo = (function() {

  class ToDo {
    constructor(title, description, project = 'Default') {
      this.title = title;
      this.description = description;
      // this.dueDate = dueDate;
      // this.priority = priority;
      this.project = project;
    }
  }

  let inputToDoName = document.querySelector("#input-todo-name");
  let inputProject = document.querySelector("#select-project");

  // if (
  //   localStorage.getItem("Tasks") !== null &&
  //   localStorage.getItem("Tasks") !== "undefined"
  // ) {
  //   toDoList = JSON.parse(localStorage.getItem("Tasks"));
  // } else {
  //   toDoList = [];
  // }
  let toDoList = [];

   const loadTasks = () => {
     if (
       localStorage.getItem("Tasks") !== null &&
       localStorage.getItem("Tasks") !== "undefined"
     ) {
       toDoList = JSON.parse(localStorage.getItem("Tasks"));
     } else {
       toDoList = [];
     }

     toDoList.forEach((task) => {
       if (localStorage.getItem('Projects').includes(task.project)) {
         addToDo(task.description, task.title, task.project, true);
       }
     });
   };

  const addToDo = (description = "Default Description", title = inputToDoName.value, project = inputProject.value, loading = false) => {

    let toDo = new ToDo(title, description, project);
    let card = document.querySelector(
      `article.project-card[data-proj="${project}"]`
    );
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "done");
    input.className = "checkbox";
    let label = document.createElement("label");
    label.setAttribute("for", "done");
    // here
    label.textContent = toDo.title;
    // here
    let dueSpan = document.createElement("span");
    dueSpan.style = "color: rgba(0, 0, 0, 0.5); float: right;";
    dueSpan.textContent = "Due: 01/01/2031";
    let priority = document.createElement("div");
    priority.setAttribute("title", "Low Priority");
    priority.className = "low-priority-circle";

    li.append(input, label, dueSpan, priority);
    ul.append(li);
    card.append(ul);

    if (loading === false) {
      toDoList.push(toDo);
      saveLocal(toDoList);
      console.log('saving again');
    }
  };

  function saveLocal(item) {
    localStorage.setItem("Tasks", JSON.stringify(toDoList));
  }

  return {addToDo, loadTasks};
})();

export default toDo;