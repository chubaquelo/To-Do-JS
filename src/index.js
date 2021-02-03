import projects from './projectsModule';
import toDo from "./toDoModule";
// const datepicker = require('js-datepicker')
projects().loadProjects();
toDo.loadTasks();
// DOM SELECTORS
const btnAddProject = document.querySelector('.new-project-submit');
const btnAddToDo = document.querySelector('.new-task-submit');
// LISTENERS
btnAddProject.addEventListener('click', projects().addNewProject);
btnAddToDo.addEventListener('click', toDo.addToDo);
