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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Dom = function Dom() {\n  function addProjectCardDom(projectTitle, dashedProjectTitle) {\n    var cardsContainer = document.querySelector(\".cards-container\");\n    var card = document.createElement(\"article\");\n    card.className = \"project-card\";\n    card.dataset.project = dashedProjectTitle;\n    var title = document.createElement(\"h2\");\n    title.textContent = projectTitle;\n    var btnDelete = document.createElement(\"button\");\n    btnDelete.textContent = \"X\";\n    btnDelete.className = \"btn-delete-project\";\n    var ul = document.createElement(\"ul\");\n    var btnCreateTask = document.createElement(\"button\");\n    btnCreateTask.textContent = \"Add new task\";\n    card.append(title, btnDelete, ul, btnCreateTask);\n    cardsContainer.append(card);\n  }\n\n  function addOptionForSelect(name, value, where) {\n    var projectsViewSelector = document.querySelector(\"#select-project\");\n    var newTaskProjectSelector = document.querySelector(\"#projects-view-selector\");\n    var newViewOption = document.createElement(\"option\");\n    newViewOption.value = value;\n    newViewOption.textContent = name;\n\n    if (where === \"list\") {\n      projectsViewSelector.append(newViewOption);\n    } else if (where === \"view\") {\n      newTaskProjectSelector.append(newViewOption);\n    } else {\n      console.log(\"You have to select list or view as where parameter.\");\n    }\n  }\n\n  function createToDoDomElement(taskObject) {\n    var li = document.createElement(\"li\");\n    var checkBoxInput = document.createElement(\"input\");\n    checkBoxInput.setAttribute(\"type\", \"checkbox\");\n    checkBoxInput.className = \"checkbox\";\n    checkBoxInput.setAttribute(\"name\", \"done\");\n\n    if (taskObject.status === true) {\n      checkBoxInput.checked = true;\n    }\n\n    var taskLabel = document.createElement(\"label\");\n    taskLabel.setAttribute(\"for\", \"done\");\n    taskLabel.textContent = taskObject.title;\n\n    if (taskObject.status === \"true\") {\n      checkBoxInput.checked = true;\n      taskLabel.classList.add(\"done-task-txt\");\n    }\n\n    var eraseIcon = document.createElement(\"img\");\n    eraseIcon.src = \"./img/trash.svg\";\n    eraseIcon.className = \"erase-icon\";\n    var dueSpan = document.createElement(\"span\");\n    dueSpan.style = \"color: rgba(0, 0, 0, 0.5); float: right;\";\n    dueSpan.textContent = taskObject.dueDate;\n    var priorityBullet = document.createElement(\"div\");\n\n    switch (taskObject.priority) {\n      default:\n        priorityBullet.setAttribute(\"title\", \"Low Priority\");\n        priorityBullet.className = \"low-priority-circle\";\n        break;\n\n      case \"mid\":\n        priorityBullet.setAttribute(\"title\", \"Medium Priority\");\n        priorityBullet.className = \"mid-priority-circle\";\n        break;\n\n      case \"high\":\n        priorityBullet.setAttribute(\"title\", \"High Priority\");\n        priorityBullet.className = \"high-priority-circle\";\n        break;\n    }\n\n    li.append(checkBoxInput, taskLabel, eraseIcon, dueSpan, priorityBullet);\n    return li;\n  }\n\n  function modalWithTaskInfo(task) {\n    var editor = document.createElement(\"div\");\n    editor.className = \"task-editor\";\n    var mainWindow = document.createElement(\"div\");\n    mainWindow.className = \"task-editor-window\";\n    var taskTitle = document.createElement(\"input\");\n    taskTitle.className = \"text-editor-inputs\";\n    taskTitle.setAttribute(\"type\", \"text\");\n    taskTitle.value = task.title;\n    taskTitle.textContent = task.title;\n    var taskDescription = document.createElement(\"textarea\");\n    taskDescription.className = \"text-editor-description\";\n    taskDescription.className = \"text-editor-inputs\";\n    taskDescription.value = task.description;\n    var taskDate = document.createElement(\"input\");\n    taskDate.className = \"text-editor-inputs\";\n    taskDate.setAttribute(\"type\", \"date\");\n    taskDate.value = task.dueDate;\n    var taskPriority = document.createElement(\"select\");\n    taskPriority.className = \"text-editor-inputs\";\n    var optionLow = document.createElement(\"option\");\n    optionLow.value = \"low\";\n    optionLow.textContent = \"Low\";\n    var optionMid = document.createElement(\"option\");\n    optionMid.value = \"mid\";\n    optionMid.textContent = \"Mid\";\n    var optionHigh = document.createElement(\"option\");\n    optionHigh.value = \"high\";\n    optionHigh.textContent = \"High\";\n    taskPriority.append(optionLow, optionMid, optionHigh);\n    taskPriority.value = task.priority;\n    var btnSave = document.createElement(\"button\");\n    btnSave.id = \"save-changes\";\n    btnSave.setAttribute(\"type\", \"button\");\n    btnSave.innerText = \"Save changes / Close\";\n    mainWindow.append(taskTitle, taskDescription, taskDate, taskPriority, btnSave);\n    editor.append(mainWindow);\n    return editor;\n  }\n\n  return {\n    addProjectCardDom: addProjectCardDom,\n    addOptionForSelect: addOptionForSelect,\n    createToDoDomElement: createToDoDomElement,\n    modalWithTaskInfo: modalWithTaskInfo\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n//# sourceURL=webpack://to-do-js/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n/* harmony import */ var _toDoModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoModule */ \"./src/toDoModule.js\");\n\n\nvar projectsModule = (0,_projectsModule__WEBPACK_IMPORTED_MODULE_0__.default)();\nvar todoModule = _toDoModule__WEBPACK_IMPORTED_MODULE_1__.default;\nvar projectsList = projectsModule.getProjectsList();\nprojectsModule.spreadProjectsListToView(projectsList);\n_toDoModule__WEBPACK_IMPORTED_MODULE_1__.default.loadTasks();\nvar inputNewProjName = document.querySelector(\".input-project-name\");\nvar btnSubmitProject = document.querySelector(\".new-project-submit\");\nvar btnAddToDo = document.querySelector(\".new-task-submit\"); // const btnsRemoveProject = document.querySelectorAll(\".btn-delete-project\");\n\nvar inputToDoName = document.querySelector(\"#input-todo-name\");\nvar inputProject = document.querySelector(\"#select-project\");\nvar inputDueDate = document.querySelector(\".date-picker\");\nvar inputPriority = document.querySelector(\".priority-picker\");\nbtnSubmitProject.addEventListener(\"click\", function () {\n  projectsModule.addNewProject(inputNewProjName.value);\n});\nbtnAddToDo.addEventListener(\"click\", function () {\n  return todoModule.addToDo(\"Default Description\", inputToDoName.value, inputProject.value, inputDueDate.value, inputPriority.value, false, false);\n}); // btnsRemoveProject.forEach(btn => btn.addEventListener('click', projectsModule.deleteProject));\n\n//# sourceURL=webpack://to-do-js/./src/index.js?");

/***/ }),

/***/ "./src/projectsModule.js":
/*!*******************************!*\
  !*** ./src/projectsModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _pureFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pureFunctions */ \"./src/pureFunctions.js\");\n\n\n\nvar Projects = function Projects() {\n  var F = (0,_pureFunctions__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n  var addRemoveProjectsBtnEventListener = function addRemoveProjectsBtnEventListener() {\n    var btnsRemoveProject = document.querySelectorAll(\".btn-delete-project\");\n    btnsRemoveProject.forEach(function (btn) {\n      return btn.addEventListener(\"click\", deleteProject);\n    });\n  };\n\n  var deleteProject = function deleteProject(e) {\n    if (window.confirm('Do you really want to delete the whole Project??') === true) {\n      var projectsList = F.fetchLocalStorage('Projects');\n      var tasksList = F.fetchLocalStorage(\"Tasks\");\n      var projectName = e.target.previousElementSibling.innerText;\n      projectsList.splice(projectsList.indexOf(projectName), 1);\n      var filteredTasks = tasksList.filter(function (element) {\n        return element.project !== projectName;\n      });\n      F.saveLocalStorage(\"Projects\", projectsList);\n      F.saveLocalStorage(\"Tasks\", filteredTasks);\n      window.location.reload();\n    }\n  };\n\n  var addNewProject = function addNewProject(title) {\n    var dashedProjectTitle = F.urlDashedName(title);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addProjectCardDom(title, dashedProjectTitle);\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addOptionForSelect(title, dashedProjectTitle, 'list');\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addOptionForSelect(title, dashedProjectTitle, 'view');\n    var projects = F.fetchLocalStorage(\"Projects\");\n    projects.push(title);\n    F.saveLocalStorage('Projects', projects);\n    addRemoveProjectsBtnEventListener();\n  };\n\n  var getProjectsList = function getProjectsList() {\n    var projectsList = [];\n\n    if (F.fetchLocalStorage(\"Projects\") !== null) {\n      projectsList = F.fetchLocalStorage(\"Projects\");\n    } else {\n      projectsList = [\"Default Project\"];\n      localStorage.setItem(\"Projects\", JSON.stringify(projectsList));\n    }\n\n    return projectsList;\n  };\n\n  var spreadProjectsListToView = function spreadProjectsListToView(projectsList) {\n    projectsList.forEach(function (title) {\n      var dashedProjectTitle = F.urlDashedName(title);\n      _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addProjectCardDom(title, dashedProjectTitle);\n      _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addOptionForSelect(title, dashedProjectTitle, \"list\");\n      _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addOptionForSelect(title, dashedProjectTitle, \"view\");\n      addRemoveProjectsBtnEventListener();\n    });\n  };\n\n  return {\n    addNewProject: addNewProject,\n    getProjectsList: getProjectsList,\n    spreadProjectsListToView: spreadProjectsListToView,\n    deleteProject: deleteProject\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://to-do-js/./src/projectsModule.js?");

/***/ }),

/***/ "./src/pureFunctions.js":
/*!******************************!*\
  !*** ./src/pureFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n\n\nvar pureFunctions = function pureFunctions() {\n  var fetchLocalStorage = function fetchLocalStorage(item) {\n    var listObject = [];\n\n    if (localStorage.getItem(item) !== null && localStorage.getItem(item) !== \"undefined\") {\n      listObject = JSON.parse(localStorage.getItem(item));\n    } else {\n      if (item === \"Projects\") {\n        listObject = [\"Default Project\"];\n      } else {\n        listObject = [];\n      }\n    }\n\n    return listObject;\n  };\n\n  var saveLocalStorage = function saveLocalStorage(key, itemsList) {\n    localStorage.setItem(key, JSON.stringify(itemsList));\n  };\n\n  function urlDashedName(name) {\n    return name.split(/\\s+/).join(\"-\");\n  }\n\n  function urlUndashedName(name) {\n    return name.split(/-+/).join(\" \");\n  }\n\n  return {\n    fetchLocalStorage: fetchLocalStorage,\n    saveLocalStorage: saveLocalStorage,\n    urlDashedName: urlDashedName,\n    urlUndashedName: urlUndashedName\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pureFunctions);\n\n//# sourceURL=webpack://to-do-js/./src/pureFunctions.js?");

/***/ }),

/***/ "./src/toDoModule.js":
/*!***************************!*\
  !*** ./src/toDoModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pureFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureFunctions */ \"./src/pureFunctions.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar F = (0,_pureFunctions__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nvar toDo = function toDo() {\n  var ToDo = function ToDo(title) {\n    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"No description\";\n    var project = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"Default\";\n    var dueDate = arguments.length > 3 ? arguments[3] : undefined;\n    var priority = arguments.length > 4 ? arguments[4] : undefined;\n    var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n    _classCallCheck(this, ToDo);\n\n    this.title = title;\n    this.description = description;\n    this.project = project;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.status = status;\n  };\n\n  function findIdxWithName(name, list) {\n    var tasksList = list;\n    var value;\n    tasksList.forEach(function (task) {\n      if (task.title === name) {\n        value = tasksList.indexOf(task);\n      }\n    });\n    return value;\n  }\n\n  function saveModalChanges(taskIndex) {\n    var tasksList = F.fetchLocalStorage(\"Tasks\");\n    var task = tasksList[taskIndex];\n    task.title = document.querySelector(\".text-editor-inputs[type=text]\").value;\n    task.description = document.querySelector(\"textarea\").value;\n    task.dueDate = document.querySelector(\".text-editor-inputs[type=date]\").value;\n    task.priority = document.querySelector(\"select.text-editor-inputs\").value;\n    console.log(task.title);\n    tasksList[taskIndex] = task;\n    F.saveLocalStorage(\"Tasks\", tasksList);\n    var body = document.querySelector(\"body\");\n    var taskEditor = document.querySelector(\".task-editor\");\n    body.removeChild(taskEditor);\n    window.location.reload();\n  }\n\n  var openTaskEditor = function openTaskEditor(e) {\n    var tasksList = F.fetchLocalStorage(\"Tasks\");\n    var taskIndex = findIdxWithName(e.target.innerText, tasksList);\n    var currentTask = tasksList[taskIndex];\n    var body = document.querySelector(\"body\");\n    var modal = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.modalWithTaskInfo(currentTask);\n    body.append(modal);\n    var btnSaveChanges = document.querySelector(\"#save-changes\");\n    btnSaveChanges.addEventListener(\"click\", function () {\n      saveModalChanges(taskIndex);\n    });\n  };\n\n  var eraseTask = function eraseTask(e) {\n    if (window.confirm(\"Are you sure?\") === true) {\n      var tasksList = F.fetchLocalStorage(\"Tasks\");\n      var taskTitle = e.target.previousSibling.innerText;\n      var filteredList = tasksList.filter(function (element) {\n        return element.title !== taskTitle;\n      });\n      tasksList = [].concat(filteredList);\n      F.saveLocalStorage(\"Tasks\", tasksList);\n      var parent = e.target.parentNode.parentNode;\n      var toErase = e.target.parentNode;\n      parent.removeChild(toErase);\n    }\n  };\n\n  var markAsDone = function markAsDone(e) {\n    var tasksList = F.fetchLocalStorage(\"Tasks\");\n    tasksList.forEach(function (task) {\n      if (task.title === e.target.nextSibling.innerText && e.target.checked) {\n        task.status = true;\n      } else if (task.title === e.target.nextSibling.innerText && !e.target.checked) {\n        task.status = false;\n      }\n    });\n    F.saveLocalStorage(\"Tasks\", tasksList);\n  };\n\n  var addTasksListeners = function addTasksListeners() {\n    var checkboxes = document.querySelectorAll(\".checkbox\");\n    checkboxes.forEach(function (checkbox) {\n      checkbox.addEventListener(\"change\", markAsDone);\n    });\n    var labels = document.querySelectorAll(\"label\");\n    labels.forEach(function (label) {\n      label.addEventListener(\"click\", openTaskEditor);\n    });\n    var eraseIcons = document.querySelectorAll(\".erase-icon\");\n    eraseIcons.forEach(function (eraseIcon) {\n      eraseIcon.addEventListener(\"click\", eraseTask);\n    });\n  };\n\n  var addToDo = function addToDo() {\n    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Default Description\";\n    var title = arguments.length > 1 ? arguments[1] : undefined;\n    var project = arguments.length > 2 ? arguments[2] : undefined;\n    var dueDate = arguments.length > 3 ? arguments[3] : undefined;\n    var priority = arguments.length > 4 ? arguments[4] : undefined;\n    var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    var loading = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n    description = \"Default Description\";\n    var toDo = new ToDo(title, description, project, dueDate, priority, status);\n    var card = document.querySelector(\"article.project-card[data-project=\\\"\".concat(project, \"\\\"]\"));\n    var ul = document.createElement(\"ul\");\n    var taskLi = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.createToDoDomElement(toDo);\n    ul.append(taskLi);\n    card.append(ul);\n\n    if (loading === false) {\n      var taskList = F.fetchLocalStorage(\"Tasks\");\n      taskList.push(toDo);\n      F.saveLocalStorage(\"Tasks\", taskList);\n    }\n\n    document.querySelector(\"#input-todo-name\").value = \"\";\n    document.querySelector(\".date-picker\").value = \"\";\n    addTasksListeners();\n  };\n\n  var loadTasks = function loadTasks() {\n    var tasksList = F.fetchLocalStorage(\"Tasks\");\n    tasksList.forEach(function (task) {\n      if (localStorage.getItem(\"Projects\").includes(F.urlUndashedName(task.project))) {\n        addToDo(task.description, task.title, task.project, task.dueDate, task.priority, task.status, true);\n      }\n    });\n    addTasksListeners();\n  };\n\n  return {\n    addToDo: addToDo,\n    loadTasks: loadTasks,\n    markAsDone: markAsDone\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://to-do-js/./src/toDoModule.js?");

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