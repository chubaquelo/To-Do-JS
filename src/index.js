import Projects from './projectsModule';
import toDo from './toDoModule';

const projectsModule = Projects();
const todoModule = toDo;

const projectsList = projectsModule.getProjectsList();
projectsModule.spreadProjectsListToView(projectsList);
toDo.loadTasks();

const inputNewProjName = document.querySelector('.input-project-name');
const btnSubmitProject = document.querySelector('.new-project-submit');
const btnAddToDo = document.querySelector('.new-task-submit');
// const btnsRemoveProject = document.querySelectorAll(".btn-delete-project");

const inputToDoName = document.querySelector('#input-todo-name');
const inputProject = document.querySelector('#select-project');
const inputDueDate = document.querySelector('.date-picker');
const inputPriority = document.querySelector('.priority-picker');

btnSubmitProject.addEventListener('click', () => {
  projectsModule.addNewProject(inputNewProjName.value);
});

btnAddToDo.addEventListener('click', () => todoModule.addToDo(
  'Default Description',
  inputToDoName.value,
  inputProject.value,
  inputDueDate.value,
  inputPriority.value,
  false,
  false,
));

// btnsRemoveProject.forEach(btn => btn.addEventListener('click', projectsModule.deleteProject));
