/* eslint-disable consistent-return */

import Dom from './DOM';
import {
  fetchLocalStorage,
  saveLocalStorage,
  urlDashedName,
} from './utils';

const Projects = () => {
  const deleteProject = (e) => {
    const projectsList = fetchLocalStorage('Projects');
    const tasksList = fetchLocalStorage('Tasks');
    const projectName = e.target.previousElementSibling.innerText;

    projectsList.splice(
      projectsList.indexOf(projectName),
      1,
    );

    const filteredTasks = tasksList.filter(
      (element) => element.project !== projectName,
    );

    saveLocalStorage('Projects', projectsList);
    saveLocalStorage('Tasks', filteredTasks);
    window.location.reload();
  };

  const deleteProjectAlert = (e) => {
    if (
      window.confirm('Do you really want to delete the whole Project??')
      === true
    ) {
      deleteProject(e);
    }
  };

  const addRemoveProjectsBtnEventListener = () => {
    const btnsRemoveProject = document.querySelectorAll('.btn-delete-project');
    btnsRemoveProject.forEach((btn) => btn.addEventListener('click', deleteProjectAlert));
  };

  const addNewProject = (title) => {
    if (title === '') return alert('You cannot have empty name.');
    if (fetchLocalStorage('Projects').includes(title)) return alert('Your project name is duplicated. Try another.');
    const dashedProjectTitle = urlDashedName(title);
    Dom.addProjectCardDom(title, dashedProjectTitle);
    Dom.addOptionForSelect(title, dashedProjectTitle, 'list');
    Dom.addOptionForSelect(title, dashedProjectTitle, 'view');

    const projects = fetchLocalStorage('Projects');
    projects.push(title);
    saveLocalStorage('Projects', projects);
    addRemoveProjectsBtnEventListener();
  };

  const getProjectsList = () => {
    let projectsList = [];

    if (fetchLocalStorage('Projects') !== null) {
      projectsList = fetchLocalStorage('Projects');
    } else {
      projectsList = ['Default Project'];
      localStorage.setItem('Projects', JSON.stringify(projectsList));
    }
    return projectsList;
  };

  const spreadProjectsListToView = (projectsList) => {
    projectsList.forEach((title) => {
      const dashedProjectTitle = urlDashedName(title);
      Dom.addProjectCardDom(title, dashedProjectTitle);
      Dom.addOptionForSelect(title, dashedProjectTitle, 'list');
      Dom.addOptionForSelect(title, dashedProjectTitle, 'view');
      addRemoveProjectsBtnEventListener();
    });
  };

  return {
    addNewProject,
    getProjectsList,
    spreadProjectsListToView,
    deleteProject,
  };
};

export default Projects;
