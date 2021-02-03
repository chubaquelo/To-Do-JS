const toDo = (function () {
  class ToDo {
    constructor(title, description = 'No description', project = "Default", dueDate, priority, status = false) {
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
    let toDo = new ToDo(title, 'Default description', project, dueDate, priority, status);
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
    label.addEventListener('click', openTaskEditor);
    
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

    document.querySelector("#input-todo-name").value = "";
    document.querySelector(".date-picker").value = "";
    // inputDueDate = "";

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

   function findTaskIdxWithName(name) {
    let value; 
    toDoList.forEach((task) => {
      if (task.title === name) {
         value =  toDoList.indexOf(task);
       }
     });
     return value;
   }

  const openTaskEditor = (e) => {
    
    let currentTask = toDoList[findTaskIdxWithName(e.target.innerText)];

    let body = document.querySelector('body');
    let editor = document.createElement('div');
    editor.className = 'task-editor';
    
    let mainWindow = document.createElement('div');
    mainWindow.className = 'task-editor-window';

    let taskTitle = document.createElement('input');
    taskTitle.className = "text-editor-inputs";
    taskTitle.setAttribute('type', 'text');
    taskTitle.value = currentTask.title;
    taskTitle.textContent = e.target.innerText;

    let taskDescription = document.createElement('textarea');
    taskDescription.className = "text-editor-description";
    taskDescription.className = "text-editor-inputs";
    taskDescription.value = currentTask.description;

    let taskDate = document.createElement('input');
    taskDate.className = "text-editor-inputs";
    taskDate.setAttribute("type", "date");
    taskDate.value = currentTask.dueDate;

    let taskPriority = document.createElement('select');
    taskPriority.className = 'text-editor-inputs';
    let optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.textContent = 'Low';
    let optionMid = document.createElement("option");
    optionMid.value = "mid";
    optionMid.textContent = "Mid";
    let optionHigh = document.createElement("option");
    optionHigh.value = "high";
    optionHigh.textContent = "High";
    taskPriority.append(optionLow, optionMid, optionHigh);
    taskPriority.value = currentTask.priority;

    let btnSave = document.createElement('button');
    btnSave.setAttribute('type', 'button');
    btnSave.innerText = 'Save changes / Close';
    btnSave.addEventListener('click', saveChanges);

    function saveChanges(){
      currentTask.title = taskTitle.value;
      currentTask.description = taskDescription.value;
      currentTask.dueDate = taskDate.value;
      currentTask.priority = taskPriority.value;
      toDoList[findTaskIdxWithName(e.target.innerText)] = currentTask;
      saveLocal();
      location.reload();
    }

    mainWindow.append(taskTitle, taskDescription, taskDate, taskPriority, btnSave);
    editor.append(mainWindow);
    body.append(editor);
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
