/* eslint-disable consistent-return */

import { fetchLocalStorage, saveLocalStorage, urlUndashedName } from './utils';
import Dom from './DOM';

const toDo = (function toDo() {
  class ToDo {
    constructor(
      title,
      description = 'No description',
      project = 'Default',
      dueDate,
      priority,
      status = false,
    ) {
      this.title = title;
      this.description = description;
      this.project = project;
      this.dueDate = dueDate;
      this.priority = priority;
      this.status = status;
    }
  }

  function findIdxWithName(name, list) {
    const tasksList = list;

    let value;
    tasksList.forEach((task) => {
      if (task.title === name) {
        value = tasksList.indexOf(task);
      }
    });

    return value;
  }

  function saveModalChanges(taskIndex) {
    const tasksList = fetchLocalStorage('Tasks');
    const task = tasksList[taskIndex];

    task.title = document.querySelector('.text-editor-inputs[type=text]').value;
    task.description = document.querySelector('textarea').value;
    task.dueDate = document.querySelector(
      '.text-editor-inputs[type=date]',
    ).value;
    task.priority = document.querySelector('select.text-editor-inputs').value;

    tasksList[taskIndex] = task;
    saveLocalStorage('Tasks', tasksList);

    const body = document.querySelector('body');
    const taskEditor = document.querySelector('.task-editor');
    body.removeChild(taskEditor);
    window.location.reload();
  }

  const openTaskEditor = (e) => {
    const tasksList = fetchLocalStorage('Tasks');
    const taskIndex = findIdxWithName(e.target.innerText, tasksList);
    const currentTask = tasksList[taskIndex];
    const body = document.querySelector('body');
    const modal = Dom.modalWithTaskInfo(currentTask);
    body.append(modal);

    const btnSaveChanges = document.querySelector('#save-changes');
    btnSaveChanges.addEventListener('click', () => {
      saveModalChanges(taskIndex);
    });
  };

  const eraseTask = (e) => {
    if (window.confirm('Are you sure?') === true) {
      let tasksList = fetchLocalStorage('Tasks');
      const taskTitle = e.target.previousSibling.innerText;
      const filteredList = tasksList.filter(
        (element) => element.title !== taskTitle,
      );
      tasksList = [].concat(filteredList);
      saveLocalStorage('Tasks', tasksList);

      const parent = e.target.parentNode.parentNode;
      const toErase = e.target.parentNode;

      parent.removeChild(toErase);
    }
  };

  const markAsDone = (e) => {
    const tasksList = fetchLocalStorage('Tasks');
    tasksList.forEach((task) => {
      if (task.title === e.target.nextSibling.innerText && e.target.checked) {
        task.status = true;
      } else if (
        task.title === e.target.nextSibling.innerText
        && !e.target.checked
      ) {
        task.status = false;
      }
    });
    saveLocalStorage('Tasks', tasksList);
  };

  const addTasksListeners = () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', markAsDone);
    });

    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      label.addEventListener('click', openTaskEditor);
    });

    const eraseIcons = document.querySelectorAll('.erase-icon');
    eraseIcons.forEach((eraseIcon) => {
      eraseIcon.addEventListener('click', eraseTask);
    });
  };

  const addToDo = (
    description = 'Default Description',
    title,
    project,
    dueDate,
    priority,
    status = false,
    loading = false,
  ) => {
    if (title === '') {
      return alert("Task can't be empty."); // eslint-disable-line
    }

    description = 'Default Description';
    const toDo = new ToDo(
      title,
      description,
      project,
      dueDate,
      priority,
      status,
    );
    const card = document.querySelector(
      `article.project-card[data-project="${project}"]`,
    );

    const ul = document.createElement('ul');
    const taskLi = Dom.createToDoDomElement(toDo);
    ul.append(taskLi);
    card.append(ul);

    if (loading === false) {
      const taskList = fetchLocalStorage('Tasks');
      taskList.push(toDo);
      saveLocalStorage('Tasks', taskList);
    }

    document.querySelector('#input-todo-name').value = '';
    document.querySelector('.date-picker').value = '';
    addTasksListeners();
  };

  const loadTasks = () => {
    const tasksList = fetchLocalStorage('Tasks');
    tasksList.forEach((task) => {
      if (
        localStorage
          .getItem('Projects')
          .includes(urlUndashedName(task.project))
      ) {
        addToDo(
          task.description,
          task.title,
          task.project,
          task.dueDate,
          task.priority,
          task.status,
          true,
        );
      }
    });
    addTasksListeners();
  };

  return {
    addToDo, loadTasks, markAsDone, findIdxWithName, ToDo,
  };
}());

export default toDo;
