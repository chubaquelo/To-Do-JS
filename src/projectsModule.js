const projects = () => {
  const projectsViewSelector = document.querySelector(
    '#projects-view-selector',
  );
  const newTaskProjectSelector = document.querySelector('#select-project');
  const cardsContainer = document.querySelector('.cards-container');
  const inpNewProjName = document.querySelector('.input-project-name');

  let projectsList = [];

  if (
    localStorage.getItem('Projects') !== null
    && localStorage.getItem('Projects') !== 'undefined'
  ) {
    projectsList = JSON.parse(localStorage.getItem('Projects'));
  } else {
    projectsList = ['Default Project'];
  }

  const saveLocal = (projectsList) => {
    localStorage.setItem('Projects', JSON.stringify(projectsList));
  };

  function urlDashedName(name) {
    return name.split(/\s+/).join('-');
  }

  const saveNewProject = (name) => {
    projectsList.push(name);
    saveLocal(projectsList);
  };


  const deleteProject = (e) => {
    const projectName = urlDashedName(
      e.target.previousElementSibling.innerText,
    );
    if (
      window.confirm('Do you really want to delete the whole Project??')
      === true
    ) {
      const optionView = document.querySelector(
        `#projects-view-selector > option[value='${urlDashedName(
          e.target.previousElementSibling.innerText,
        )}']`,
      );
      const optionAdd = document.querySelector(
        `#select-project > option[value='${urlDashedName(
          e.target.previousElementSibling.innerText,
        )}']`,
      );
      document.querySelector('#projects-view-selector').removeChild(optionView);
      document.querySelector('#select-project').removeChild(optionAdd);
      const projectCard = e.target.offsetParent;

      projectsList.splice(
        projectsList.indexOf(e.target.previousElementSibling.innerText),
        1,
      );
      // Remove card
      cardsContainer.removeChild(projectCard);
      // Remove from local, and remove all tasks from projects also, then save.
      const tasks = JSON.parse(localStorage.getItem('Tasks'));
      const filteredTasks = tasks.filter(
        (element) => element.project !== projectName,
      );

      localStorage.setItem('Tasks', JSON.stringify(filteredTasks));
      saveLocal(projectsList);
      window.location.reload();
    }
  };

  const addNewProject = () => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.project = urlDashedName(inpNewProjName.value);

    const title = document.createElement('h2');
    title.textContent = inpNewProjName.value;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.className = 'btn-delete-project';
    btnDelete.addEventListener('click', deleteProject);

    const ul = document.createElement('ul');
    const btnCreateTask = document.createElement('button');
    btnCreateTask.textContent = 'Add new task';

    const newViewOption = document.createElement('option');
    newViewOption.value = urlDashedName(inpNewProjName.value);
    newViewOption.textContent = inpNewProjName.value;
    projectsViewSelector.append(newViewOption);

    const newViewOptionCopy = newViewOption.cloneNode(true);
    newTaskProjectSelector.append(newViewOptionCopy);

    card.append(title, btnDelete, ul, btnCreateTask);
    cardsContainer.append(card);
    saveNewProject(inpNewProjName.value);
    window.location.reload();
  };

  const loadProjects = () => {
    let projectsList = [];

    if (localStorage.getItem('Projects') !== null) {
      projectsList = JSON.parse(localStorage.getItem('Projects'));
    } else {
      projectsList = ['Default Project'];
      localStorage.setItem('Projects', JSON.stringify(projectsList));
    }

    projectsList.forEach((title) => {
      const cardCont = document.querySelector('.cards-container');
      const card = document.createElement('article');
      card.className = 'project-card';
      card.dataset.proj = urlDashedName(title);
      const h2 = document.createElement('h2');
      h2.textContent = title;
      const btnDelete = document.createElement('button');
      btnDelete.textContent = 'X';
      btnDelete.className = 'btn-delete-project';
      btnDelete.addEventListener('click', deleteProject);
      const ul = document.createElement('ul');
      const btnCreateTask = document.createElement('button');
      btnCreateTask.textContent = 'Add new task';

      const newViewOption = document.createElement('option');
      newViewOption.value = urlDashedName(title);
      newViewOption.textContent = title;
      projectsViewSelector.append(newViewOption);
      const newViewOptionCopy = newViewOption.cloneNode(true);
      newTaskProjectSelector.append(newViewOptionCopy);

      card.append(h2, btnDelete, ul, btnCreateTask);
      cardCont.append(card);
    });
  };

  return { addNewProject, loadProjects, deleteProject };
};

export default projects;
