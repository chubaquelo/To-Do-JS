/* eslint-disable consistent-return */

import Dom from './DOM';
import pureFunctions from './pureFunctions';

const Projects = () => {
  const F = pureFunctions();

  const deleteProject = (e) => {
    if (
      window.confirm('Do you really want to delete the whole Project??')
      === true
    ) {
      const projectsList = F.fetchLocalStorage('Projects');
      const tasksList = F.fetchLocalStorage('Tasks');
      const projectName = e.target.previousElementSibling.innerText;

      projectsList.splice(
        projectsList.indexOf(projectName),
        1,
      );

      const filteredTasks = tasksList.filter(
        (element) => element.project !== projectName,
      );

      F.saveLocalStorage('Projects', projectsList);
      F.saveLocalStorage('Tasks', filteredTasks);
      window.location.reload();
    }
  };

  const addRemoveProjectsBtnEventListener = () => {
    const btnsRemoveProject = document.querySelectorAll('.btn-delete-project');
    btnsRemoveProject.forEach((btn) => btn.addEventListener('click', deleteProject));
  };

  const addNewProject = (title) => {
    if (title === '') return alert('You cannot have empty name.');
    if (F.fetchLocalStorage('Projects').includes(title)) return alert('Your project name is duplicated. Try another.');
    const dashedProjectTitle = F.urlDashedName(title);
    Dom.addProjectCardDom(title, dashedProjectTitle);
    Dom.addOptionForSelect(title, dashedProjectTitle, 'list');
    Dom.addOptionForSelect(title, dashedProjectTitle, 'view');

    const projects = F.fetchLocalStorage('Projects');
    projects.push(title);
    F.saveLocalStorage('Projects', projects);
    addRemoveProjectsBtnEventListener();
  };

  const getProjectsList = () => {
    let projectsList = [];

    if (F.fetchLocalStorage('Projects') !== null) {
      projectsList = F.fetchLocalStorage('Projects');
    } else {
      projectsList = ['Default Project'];
      localStorage.setItem('Projects', JSON.stringify(projectsList));
    }
    return projectsList;
  };

  const spreadProjectsListToView = (projectsList) => {
    projectsList.forEach((title) => {
      const dashedProjectTitle = F.urlDashedName(title);
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
