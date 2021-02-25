import Projects from './projects';
import { addToDo, loadTasks } from './toDo';

const projectsModule = Projects();

// Display projects card and then tasks for each project
projectsModule.spreadProjectsListToView(projectsModule.getProjectsList());
loadTasks();

// Set query selectors for buttons, so I can add EventListeners after
const btnSubmitProject = document.querySelector('.new-project-submit');
const btnAddToDo = document.querySelector('.new-task-submit');
// Set querySelectors for inputs, to send as attribute on click events
const inputNewProjName = document.querySelector('.input-project-name');
const inputToDoName = document.querySelector('#input-todo-name');
const inputProject = document.querySelector('#select-project');
const inputDueDate = document.querySelector('.date-picker');
const inputPriority = document.querySelector('.priority-picker');

// Set EventListeners for different selectors
btnSubmitProject.addEventListener('click', () => {
  projectsModule.addNewProject(inputNewProjName.value);
});

btnAddToDo.addEventListener('click', () => addToDo(
  'Default Description',
  inputToDoName.value,
  inputProject.value,
  inputDueDate.value,
  inputPriority.value,
  false,
  false,
));
