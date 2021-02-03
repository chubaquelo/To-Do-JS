const toDo = (function () {
  class ToDo {
    constructor(title, description, project = "Default", dueDate, priority, status = false) {
      this.title = title;
      this.description = description;
      this.project = project;
      this.dueDate = dueDate;
      this.priority = priority;
      this.status = status;
    }
  }

  let inputToDoName = document.querySelector("#input-todo-name");
  let inputProject = document.querySelector("#select-project");
  let inputDueDate = document.querySelector('.date-picker');
  let inputPriority = document.querySelector(".priority-picker");

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
      if (
        localStorage.getItem("Projects").includes(urlUndashedName(task.project))
      ) {
        addToDo(
          task.description,
          task.title,
          task.project,
          task.dueDate,
          task.priority,
          task.status,
          true
        );
      }
    });
  };

  const addToDo = (
    description = "Default Description",
    title = inputToDoName.value,
    project = inputProject.value,
    dueDate = inputDueDate.value,
    priority = inputPriority.value,
    status = false,
    loading = false
  ) => {
    let toDo = new ToDo(title, description, project, dueDate, priority, status);
    let card = document.querySelector(
      `article.project-card[data-proj="${project}"]`
    );
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let input = document.createElement("input");
    if (status === true){ input.checked = true }
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "done");
    input.className = "checkbox";
    input.addEventListener("change", markAsDone);
    
    let label = document.createElement("label");
    label.setAttribute("for", "done");
    label.textContent = toDo.title;
    
    if (toDo.status === "true"){
      input.checked = true;
      label.classList.add('done-task-txt');
    }
    
    let eraseIcon = document.createElement("img");
    eraseIcon.src = "./img/trash.svg";
    eraseIcon.className = "erase-icon";
    eraseIcon.addEventListener("click", eraseTask);

    let dueSpan = document.createElement("span");
    dueSpan.style = "color: rgba(0, 0, 0, 0.5); float: right;";
    dueSpan.textContent = toDo.dueDate;
    
    let priorityBullet = document.createElement("div");
    
    // Styling for priority bullet
    
    switch (priority){
      case 'low':
        priorityBullet.setAttribute("title", "Low Priority");
        priorityBullet.className = "low-priority-circle";
        break;
      case 'mid':
        priorityBullet.setAttribute("title", "Medium Priority");
        priorityBullet.className = "mid-priority-circle";
        break;
      case 'high':
        priorityBullet.setAttribute("title", "High Priority");
        priorityBullet.className = "high-priority-circle";
        break;
    }

    li.append(input, label, eraseIcon, dueSpan, priorityBullet);
    ul.append(li);
    card.append(ul);

    if (loading === false) {
      toDoList.push(toDo);
      saveLocal(toDoList);
    }
  };

  const eraseTask = (e) => {
    
    if (confirm('Are you sure?') === true) {
      let taskTitle = e.target.previousSibling.innerText;
      let filteredList = toDoList.filter(element => element.title !== taskTitle);
      toDoList = [].concat(filteredList);
      saveLocal(toDoList);
  
      // Remove from DOM
      let parent = e.target.parentNode.parentNode;
      let toErase = e.target.parentNode;
  
      parent.removeChild(toErase);
    }
  }

  const markAsDone = (e) => {

    toDoList.forEach(task => {
      if (
        task.title === e.target.nextSibling.innerText &&
        e.target.checked
      ) {
        task.status = true;
      } else if (
        task.title === e.target.nextSibling.innerText &&
        !e.target.checked
      ) {
        task.status = false;
      }
    })
    saveLocal(toDoList);
  }

  function saveLocal(item) {
    localStorage.setItem("Tasks", JSON.stringify(toDoList));
  }

  function urlUndashedName(name) {
    return name.split(/-+/).join(" ");
  }

  return { addToDo, loadTasks, markAsDone };
})();

export default toDo;
