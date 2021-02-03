/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n/* harmony import */ var _toDoModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoModule */ \"./src/toDoModule.js\");\n// const datepicker = require('js-datepicker')\n\n\n(0,_projectsModule__WEBPACK_IMPORTED_MODULE_0__.default)().loadProjects();\n_toDoModule__WEBPACK_IMPORTED_MODULE_1__.default.loadTasks(); // DOM SELECTORS\n\nvar btnAddProject = document.querySelector(\".new-project-submit\");\nvar btnAddToDo = document.querySelector(\".new-task-submit\"); // const picker = datepicker(\".date-picker\", { id: 1 });\n// LISTENERS\n\nbtnAddProject.addEventListener(\"click\", (0,_projectsModule__WEBPACK_IMPORTED_MODULE_0__.default)().addNewProject);\nbtnAddToDo.addEventListener(\"click\", _toDoModule__WEBPACK_IMPORTED_MODULE_1__.default.addToDo);\n\n//# sourceURL=webpack://to-do-js/./src/index.js?");

/***/ }),

/***/ "./src/projectsModule.js":
/*!*******************************!*\
  !*** ./src/projectsModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar projects = function projects() {\n  var projectsViewSelector = document.querySelector(\"#projects-view-selector\");\n  var newTaskProjectSelector = document.querySelector(\"#select-project\");\n  var cardsContainer = document.querySelector(\".cards-container\");\n  var inpNewProjName = document.querySelector(\".input-project-name\");\n  var projectsList = [];\n\n  if (localStorage.getItem(\"Projects\") !== null && localStorage.getItem(\"Projects\") !== 'undefined') {\n    projectsList = JSON.parse(localStorage.getItem(\"Projects\"));\n  } else {\n    projectsList = [\"Default Project\"];\n  }\n\n  var addNewProject = function addNewProject() {\n    var card = document.createElement(\"article\");\n    card.className = \"project-card\";\n    card.dataset.project = urlDashedName(inpNewProjName.value);\n    var title = document.createElement(\"h2\");\n    title.textContent = inpNewProjName.value;\n    var btnDelete = document.createElement(\"button\");\n    btnDelete.textContent = \"X\";\n    btnDelete.className = \"btn-delete-project\";\n    btnDelete.addEventListener(\"click\", deleteProject);\n    var ul = document.createElement(\"ul\");\n    var btnCreateTask = document.createElement(\"button\");\n    btnCreateTask.textContent = \"Add new task\";\n    var newViewOption = document.createElement(\"option\");\n    newViewOption.value = urlDashedName(inpNewProjName.value);\n    newViewOption.textContent = inpNewProjName.value;\n    projectsViewSelector.append(newViewOption);\n    var newViewOptionCopy = newViewOption.cloneNode(true);\n    newTaskProjectSelector.append(newViewOptionCopy);\n    card.append(title, btnDelete, ul, btnCreateTask);\n    cardsContainer.append(card);\n    saveNewProject(inpNewProjName.value);\n    location.reload();\n  };\n\n  var deleteProject = function deleteProject(e) {\n    var projectName = urlDashedName(e.target.previousElementSibling.innerText);\n\n    if (window.confirm('Do you really want to delete the whole Project??') === true) {\n      var optionView = document.querySelector(\"#projects-view-selector > option[value='\".concat(urlDashedName(e.target.previousElementSibling.innerText), \"']\"));\n      var optionAdd = document.querySelector(\"#select-project > option[value='\".concat(urlDashedName(e.target.previousElementSibling.innerText), \"']\"));\n      document.querySelector('#projects-view-selector').removeChild(optionView);\n      document.querySelector(\"#select-project\").removeChild(optionAdd);\n      var projectCard = e.target.offsetParent;\n      projectsList.splice(projectsList.indexOf(e.target.previousElementSibling.innerText), 1); //Remove card\n\n      cardsContainer.removeChild(projectCard); //Remove from local, and remove all tasks from projects also, then save.\n\n      var tasks = JSON.parse(localStorage.getItem('Tasks'));\n      var filteredTasks = tasks.filter(function (element) {\n        return element.project !== projectName;\n      });\n      localStorage.setItem(\"Tasks\", JSON.stringify(filteredTasks));\n      saveLocal(projectsList);\n      location.reload();\n    }\n\n    ;\n  };\n\n  function urlDashedName(name) {\n    return name.split(/\\s+/).join(\"-\");\n  }\n\n  var saveNewProject = function saveNewProject(name) {\n    projectsList.push(name);\n    saveLocal(projectsList);\n  };\n\n  var saveLocal = function saveLocal(projectsList) {\n    localStorage.setItem(\"Projects\", JSON.stringify(projectsList));\n  };\n\n  var loadProjects = function loadProjects() {\n    var projectsList = [];\n\n    if (localStorage.getItem(\"Projects\") !== null) {\n      projectsList = JSON.parse(localStorage.getItem(\"Projects\"));\n    } else {\n      projectsList = [\"Default Project\"];\n      localStorage.setItem('Projects', JSON.stringify(projectsList));\n    }\n\n    projectsList.forEach(function (title) {\n      var cardCont = document.querySelector('.cards-container');\n      var card = document.createElement('article');\n      card.className = 'project-card';\n      card.dataset[\"proj\"] = urlDashedName(title);\n      var h2 = document.createElement('h2');\n      h2.textContent = title;\n      var btnDelete = document.createElement('button');\n      btnDelete.textContent = 'X';\n      btnDelete.className = 'btn-delete-project';\n      btnDelete.addEventListener('click', deleteProject);\n      var ul = document.createElement('ul');\n      var btnCreateTask = document.createElement('button');\n      btnCreateTask.textContent = 'Add new task';\n      var newViewOption = document.createElement('option');\n      newViewOption.value = urlDashedName(title);\n      newViewOption.textContent = title;\n      projectsViewSelector.append(newViewOption);\n      var newViewOptionCopy = newViewOption.cloneNode(true);\n      newTaskProjectSelector.append(newViewOptionCopy);\n      card.append(h2, btnDelete, ul, btnCreateTask);\n      cardCont.append(card);\n    });\n  };\n\n  return {\n    addNewProject: addNewProject,\n    loadProjects: loadProjects,\n    deleteProject: deleteProject\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://to-do-js/./src/projectsModule.js?");

/***/ }),

/***/ "./src/toDoModule.js":
/*!***************************!*\
  !*** ./src/toDoModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar toDo = function () {\n  var ToDo = function ToDo(title) {\n    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No description';\n    var project = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"Default\";\n    var dueDate = arguments.length > 3 ? arguments[3] : undefined;\n    var priority = arguments.length > 4 ? arguments[4] : undefined;\n    var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n    _classCallCheck(this, ToDo);\n\n    this.title = title;\n    this.description = description;\n    this.project = project;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.status = status;\n  };\n\n  var inputToDoName = document.querySelector(\"#input-todo-name\");\n  var inputProject = document.querySelector(\"#select-project\");\n  var inputDueDate = document.querySelector('.date-picker');\n  var inputPriority = document.querySelector(\".priority-picker\");\n  var toDoList = [];\n\n  var loadTasks = function loadTasks() {\n    if (localStorage.getItem(\"Tasks\") !== null && localStorage.getItem(\"Tasks\") !== \"undefined\") {\n      toDoList = JSON.parse(localStorage.getItem(\"Tasks\"));\n    } else {\n      toDoList = [];\n    }\n\n    toDoList.forEach(function (task) {\n      if (localStorage.getItem(\"Projects\").includes(urlUndashedName(task.project))) {\n        addToDo(task.description, task.title, task.project, task.dueDate, task.priority, task.status, true);\n      }\n    });\n  };\n\n  var addToDo = function addToDo() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Default Description\";\n    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inputToDoName.value;\n    var project = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : inputProject.value;\n    var dueDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : inputDueDate.value;\n    var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : inputPriority.value;\n    var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    var loading = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n    var toDo = new ToDo(title, 'Default description', project, dueDate, priority, status);\n    var card = document.querySelector(\"article.project-card[data-proj=\\\"\".concat(project, \"\\\"]\"));\n    var ul = document.createElement(\"ul\");\n    var li = document.createElement(\"li\");\n    var input = document.createElement(\"input\");\n\n    if (status === true) {\n      input.checked = true;\n    }\n\n    input.setAttribute(\"type\", \"checkbox\");\n    input.setAttribute(\"name\", \"done\");\n    input.className = \"checkbox\";\n    input.addEventListener(\"change\", markAsDone);\n    var label = document.createElement(\"label\");\n    label.setAttribute(\"for\", \"done\");\n    label.textContent = toDo.title;\n    label.addEventListener('click', openTaskEditor);\n\n    if (toDo.status === \"true\") {\n      input.checked = true;\n      label.classList.add('done-task-txt');\n    }\n\n    var eraseIcon = document.createElement(\"img\");\n    eraseIcon.src = \"./img/trash.svg\";\n    eraseIcon.className = \"erase-icon\";\n    eraseIcon.addEventListener(\"click\", eraseTask);\n    var dueSpan = document.createElement(\"span\");\n    dueSpan.style = \"color: rgba(0, 0, 0, 0.5); float: right;\";\n    dueSpan.textContent = toDo.dueDate;\n    var priorityBullet = document.createElement(\"div\"); // Styling for priority bullet\n\n    switch (priority) {\n      case 'low':\n        priorityBullet.setAttribute(\"title\", \"Low Priority\");\n        priorityBullet.className = \"low-priority-circle\";\n        break;\n\n      case 'mid':\n        priorityBullet.setAttribute(\"title\", \"Medium Priority\");\n        priorityBullet.className = \"mid-priority-circle\";\n        break;\n\n      case 'high':\n        priorityBullet.setAttribute(\"title\", \"High Priority\");\n        priorityBullet.className = \"high-priority-circle\";\n        break;\n    }\n\n    li.append(input, label, eraseIcon, dueSpan, priorityBullet);\n    ul.append(li);\n    card.append(ul);\n\n    if (loading === false) {\n      toDoList.push(toDo);\n      saveLocal(toDoList);\n    }\n\n    document.querySelector(\"#input-todo-name\").value = \"\";\n    document.querySelector(\".date-picker\").value = \"\"; // inputDueDate = \"\";\n  };\n\n  var eraseTask = function eraseTask(e) {\n    if (confirm('Are you sure?') === true) {\n      var taskTitle = e.target.previousSibling.innerText;\n      var filteredList = toDoList.filter(function (element) {\n        return element.title !== taskTitle;\n      });\n      toDoList = [].concat(filteredList);\n      saveLocal(toDoList); // Remove from DOM\n\n      var parent = e.target.parentNode.parentNode;\n      var toErase = e.target.parentNode;\n      parent.removeChild(toErase);\n    }\n  };\n\n  var markAsDone = function markAsDone(e) {\n    toDoList.forEach(function (task) {\n      if (task.title === e.target.nextSibling.innerText && e.target.checked) {\n        task.status = true;\n      } else if (task.title === e.target.nextSibling.innerText && !e.target.checked) {\n        task.status = false;\n      }\n    });\n    saveLocal(toDoList);\n  };\n\n  function findTaskIdxWithName(name) {\n    var value;\n    toDoList.forEach(function (task) {\n      if (task.title === name) {\n        value = toDoList.indexOf(task);\n      }\n    });\n    return value;\n  }\n\n  var openTaskEditor = function openTaskEditor(e) {\n    var currentTask = toDoList[findTaskIdxWithName(e.target.innerText)];\n    var body = document.querySelector('body');\n    var editor = document.createElement('div');\n    editor.className = 'task-editor';\n    var mainWindow = document.createElement('div');\n    mainWindow.className = 'task-editor-window';\n    var taskTitle = document.createElement('input');\n    taskTitle.className = \"text-editor-inputs\";\n    taskTitle.setAttribute('type', 'text');\n    taskTitle.value = currentTask.title;\n    taskTitle.textContent = e.target.innerText;\n    var taskDescription = document.createElement('textarea');\n    taskDescription.className = \"text-editor-description\";\n    taskDescription.className = \"text-editor-inputs\";\n    taskDescription.value = currentTask.description;\n    var taskDate = document.createElement('input');\n    taskDate.className = \"text-editor-inputs\";\n    taskDate.setAttribute(\"type\", \"date\");\n    taskDate.value = currentTask.dueDate;\n    var taskPriority = document.createElement('select');\n    taskPriority.className = 'text-editor-inputs';\n    var optionLow = document.createElement('option');\n    optionLow.value = 'low';\n    optionLow.textContent = 'Low';\n    var optionMid = document.createElement(\"option\");\n    optionMid.value = \"mid\";\n    optionMid.textContent = \"Mid\";\n    var optionHigh = document.createElement(\"option\");\n    optionHigh.value = \"high\";\n    optionHigh.textContent = \"High\";\n    taskPriority.append(optionLow, optionMid, optionHigh);\n    taskPriority.value = currentTask.priority;\n    var btnSave = document.createElement('button');\n    btnSave.setAttribute('type', 'button');\n    btnSave.innerText = 'Save changes / Close';\n    btnSave.addEventListener('click', saveChanges);\n\n    function saveChanges() {\n      currentTask.title = taskTitle.value;\n      currentTask.description = taskDescription.value;\n      currentTask.dueDate = taskDate.value;\n      currentTask.priority = taskPriority.value;\n      toDoList[findTaskIdxWithName(e.target.innerText)] = currentTask;\n      saveLocal();\n      location.reload();\n    }\n\n    mainWindow.append(taskTitle, taskDescription, taskDate, taskPriority, btnSave);\n    editor.append(mainWindow);\n    body.append(editor);\n  };\n\n  function saveLocal(item) {\n    localStorage.setItem(\"Tasks\", JSON.stringify(toDoList));\n  }\n\n  function urlUndashedName(name) {\n    return name.split(/-+/).join(\" \");\n  }\n\n  return {\n    addToDo: addToDo,\n    loadTasks: loadTasks,\n    markAsDone: markAsDone\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://to-do-js/./src/toDoModule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;