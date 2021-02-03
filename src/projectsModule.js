const projects = () => {
  
  const projectsViewSelector = document.querySelector("#projects-view-selector");
  const newTaskProjectSelector = document.querySelector("#select-project");
  const cardsContainer = document.querySelector(".cards-container");
  const inpNewProjName = document.querySelector(".input-project-name");

  let projectsList = [];
  
  if (
    localStorage.getItem("Projects") !== null &&
    localStorage.getItem("Projects") !== 'undefined'
  ) {
    projectsList = JSON.parse(localStorage.getItem("Projects"));
  } else {
    projectsList = ["Default"];
  }

  const addNewProject = () => {
    let card = document.createElement("article");
    card.className = "project-card";
    card.dataset.project = urlDashedName(inpNewProjName.value);

    let title = document.createElement("h2");
    title.textContent = inpNewProjName.value;

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "X";
    btnDelete.className = "btn-delete-project";
    btnDelete.addEventListener("click", deleteProject);

    let ul = document.createElement("ul");
    let btnCreateTask = document.createElement("button");
    btnCreateTask.textContent = "Add new task";

    let newViewOption = document.createElement("option");
    newViewOption.value = urlDashedName(inpNewProjName.value);
    newViewOption.textContent = inpNewProjName.value;
    projectsViewSelector.append(newViewOption);

    let newViewOptionCopy = newViewOption.cloneNode(true);
    newTaskProjectSelector.append(newViewOptionCopy);

    card.append(title, btnDelete, ul, btnCreateTask);
    cardsContainer.append(card);
    saveNewProject(inpNewProjName.value);
    location.reload();
  };

  const deleteProject = (e) => {
    let projectName = urlDashedName(e.target.previousElementSibling.innerText);
    if (window.confirm('Do you really want to delete the whole Project??') === true) {
      let optionView = document.querySelector(
        `#projects-view-selector > option[value='${urlDashedName(e.target.previousElementSibling.innerText)}']`
      );
      let optionAdd = document.querySelector(
        `#select-project > option[value='${urlDashedName(
          e.target.previousElementSibling.innerText
          )}']`
        );
      document.querySelector('#projects-view-selector').removeChild(optionView);
      document.querySelector("#select-project").removeChild(optionAdd);
      let projectCard = e.target.offsetParent;

      projectsList.splice(
        projectsList.indexOf(e.target.previousElementSibling.innerText),
        1
      );
      //Remove card
      cardsContainer.removeChild(projectCard);
      //Remove from local, and remove all tasks from projects also, then save.
      let tasks = JSON.parse(localStorage.getItem('Tasks'));
      let filteredTasks = tasks.filter(element => element.project !== projectName);

      localStorage.setItem("Tasks", JSON.stringify(filteredTasks));
      saveLocal(projectsList);
      location.reload();
    };
  }

  function urlDashedName(name) {
    return name.split(/\s+/).join("-");
  }

  const saveNewProject = (name) => {
    projectsList.push(name);
    saveLocal(projectsList);
  };

  const saveLocal = (projectsList) => {
    localStorage.setItem("Projects", JSON.stringify(projectsList));
  };

  const loadProjects = () => {
    let projectsList = [];

    if (localStorage.getItem("Projects") !== null) {
      projectsList = JSON.parse(localStorage.getItem("Projects"));
    } else {
      projectsList = ["Default"];
      localStorage.setItem('Projects', JSON.stringify(projectsList));
    }

    projectsList.forEach(title => {
      let cardCont = document.querySelector('.cards-container');
      let card = document.createElement('article');
      card.className = 'project-card';
      card.dataset["proj"] = urlDashedName(title);
      let h2 = document.createElement('h2');
      h2.textContent = title;
      let btnDelete = document.createElement('button');
      btnDelete.textContent = 'X';
      btnDelete.className = 'btn-delete-project';
      btnDelete.addEventListener('click', deleteProject);
      let ul = document.createElement('ul');
      let btnCreateTask = document.createElement('button');
      btnCreateTask.textContent = 'Add new task';

      let newViewOption = document.createElement('option');
      newViewOption.value = urlDashedName(title);
      newViewOption.textContent = title;
      projectsViewSelector.append(newViewOption);
      let newViewOptionCopy = newViewOption.cloneNode(true);
      newTaskProjectSelector.append(newViewOptionCopy);

      card.append(h2, btnDelete, ul, btnCreateTask);
      cardCont.append(card);
    })
  }

  return {addNewProject, loadProjects, deleteProject};
};

export default projects;