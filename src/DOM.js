const Dom = (function Dom() {
  function addProjectCardDom(projectTitle, dashedProjectTitle) {
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.project = dashedProjectTitle;

    const title = document.createElement('h2');
    title.textContent = projectTitle;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.className = 'btn-delete-project';

    const ul = document.createElement('ul');
    const btnCreateTask = document.createElement('button');
    btnCreateTask.textContent = 'Add new task';

    card.append(title, btnDelete, ul, btnCreateTask);
    cardsContainer.append(card);
  }

  function addOptionForSelect(name, value, where) {
    const projectsViewSelector = document.querySelector('#select-project');
    const newTaskProjectSelector = document.querySelector(
      '#projects-view-selector',
    );

    const newViewOption = document.createElement('option');
    newViewOption.value = value;
    newViewOption.textContent = name;

    if (where === 'list') {
      projectsViewSelector.append(newViewOption);
    } else if (where === 'view') {
      newTaskProjectSelector.append(newViewOption);
    } else {
      window.alert('You have to select list or view as where parameter.');
    }
  }

  function createToDoDomElement(taskObject) {
    const li = document.createElement('li');
    const checkBoxInput = document.createElement('input');
    checkBoxInput.setAttribute('type', 'checkbox');
    checkBoxInput.className = 'checkbox';
    checkBoxInput.setAttribute('name', 'done');

    if (taskObject.status === true) {
      checkBoxInput.checked = true;
    }

    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'done');
    taskLabel.textContent = taskObject.title;

    if (taskObject.status === 'true') {
      checkBoxInput.checked = true;
      taskLabel.classList.add('done-task-txt');
    }

    const eraseIcon = document.createElement('img');
    eraseIcon.src = './img/trash.svg';
    eraseIcon.className = 'erase-icon';

    const dueSpan = document.createElement('span');
    dueSpan.style = 'color: rgba(0, 0, 0, 0.5); float: right;';
    dueSpan.textContent = taskObject.dueDate;

    const priorityBullet = document.createElement('div');

    switch (taskObject.priority) {
      default:
        priorityBullet.setAttribute('title', 'Low Priority');
        priorityBullet.className = 'low-priority-circle';
        break;
      case 'mid':
        priorityBullet.setAttribute('title', 'Medium Priority');
        priorityBullet.className = 'mid-priority-circle';
        break;
      case 'high':
        priorityBullet.setAttribute('title', 'High Priority');
        priorityBullet.className = 'high-priority-circle';
        break;
    }

    li.append(checkBoxInput, taskLabel, eraseIcon, dueSpan, priorityBullet);
    return li;
  }

  function modalWithTaskInfo(task) {
    const editor = document.createElement('div');
    editor.className = 'task-editor';

    const mainWindow = document.createElement('div');
    mainWindow.className = 'task-editor-window';

    const taskTitle = document.createElement('input');
    taskTitle.className = 'text-editor-inputs';
    taskTitle.setAttribute('type', 'text');
    taskTitle.value = task.title;
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement('textarea');
    taskDescription.className = 'text-editor-description';
    taskDescription.className = 'text-editor-inputs';
    taskDescription.value = task.description;

    const taskDate = document.createElement('input');
    taskDate.className = 'text-editor-inputs';
    taskDate.setAttribute('type', 'date');
    taskDate.value = task.dueDate;

    const taskPriority = document.createElement('select');
    taskPriority.className = 'text-editor-inputs';
    const optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.textContent = 'Low';
    const optionMid = document.createElement('option');
    optionMid.value = 'mid';
    optionMid.textContent = 'Mid';
    const optionHigh = document.createElement('option');
    optionHigh.value = 'high';
    optionHigh.textContent = 'High';
    taskPriority.append(optionLow, optionMid, optionHigh);
    taskPriority.value = task.priority;

    const btnSave = document.createElement('button');
    btnSave.id = 'save-changes';
    btnSave.setAttribute('type', 'button');
    btnSave.innerText = 'Save changes / Close';

    mainWindow.append(
      taskTitle,
      taskDescription,
      taskDate,
      taskPriority,
      btnSave,
    );

    editor.append(mainWindow);
    return editor;
  }

  return {
    addProjectCardDom,
    addOptionForSelect,
    createToDoDomElement,
    modalWithTaskInfo,
  };
}());

export default Dom;
