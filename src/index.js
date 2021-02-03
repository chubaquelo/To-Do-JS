// const datepicker = require('js-datepicker')
import projects from "./projectsModule";
import toDo from "./toDoModule";
projects().loadProjects();
toDo.loadTasks();
// DOM SELECTORS
const btnAddProject = document.querySelector(".new-project-submit");
const btnAddToDo = document.querySelector(".new-task-submit");
// const picker = datepicker(".date-picker", { id: 1 });
// LISTENERS
btnAddProject.addEventListener("click", projects().addNewProject);
btnAddToDo.addEventListener("click", toDo.addToDo);
