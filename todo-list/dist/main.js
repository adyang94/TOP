/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------

//get old info


//set up side bar

_sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarSetup;

//create new tasks

//SCRIPT---------------------------------------------------------
console.log('JS working');

/***/ }),

/***/ "./src/popOutForm.js":
/*!***************************!*\
  !*** ./src/popOutForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submit": () => /* binding */ submit,
/* harmony export */   "tasks": () => /* binding */ tasks
/* harmony export */ });
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
//CONST AND VARIABLES--------------------------------------------
let tasks = [];

//FUNCTIONS------------------------------------------------------
const submit = (() => {
    console.log('submit module working');
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');
    let popOutTitle = document.querySelector('.popOutTitle');
    let popOutDescription = document.querySelector('.popOutDescription');
    let popOutDueDate = document.querySelector('.popOutDueDate');
    let newTask;


    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');
        
        newTask = new addNewTask(popOutTitle, popOutDescription, popOutDueDate);
        tasks.push(newTask);

        
        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
        
        console.log([tasks]);
        
        

    });

})();

function addNewTask(title, description, dueDate) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;

}
//SCRIPT---------------------------------------------------------



/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => /* binding */ renderTasks
/* harmony export */ });
/* harmony import */ var _popOutForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popOutForm */ "./src/popOutForm.js");
//CONST AND VARIABLES--------------------------------------------


//FUNCTIONS------------------------------------------------------

function renderTasks () {
    console.log('render tasks module working');
    console.log([_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks]);
    
    let main = document.querySelector('.main');

    //erase current tasks
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
        
    for(let i=0; i < _popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++){
        //task container
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        taskContainer.dataset.task = i;
        let taskText = document.createElement('p');
        taskText.innerHTML = 
            `
            <span class = "title">Title: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}</span><br>

            <span class = "description">Description: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].description}</span> <br>

            <span class = "dueDate">Due: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].dueDate}</span><br>`
        taskContainer.appendChild(taskText);

        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.dataset.task = i;
        removeBtn.innerHTML = 'X';
        console.log(`dataset btn: ${removeBtn.dataset.task}`);
        removeBtn.addEventListener('click', (event, srcElement) => {
            console.log(`dataset btn1: ${removeBtn.dataset.task}`);
            _popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(event.srcElement.dataset.task, 1);
            renderTasks();
        })
        taskContainer.appendChild(removeBtn);
        
        //append all elements
        main.appendChild(taskContainer);
    }
    
}
//SCRIPT---------------------------------------------------------






// //title
// let titleContainer = document.createElement('div');
// let title = document.createElement('div');
// title.classList.add('title');
// title.innerHTML = `Title: ${task.title} <br> `;
// titleContainer.appendChild(title);
// taskContainer.appendChild(titleContainer);

// //description
// let descriptionContainer = document.createElement('div');
// let description = document.createElement('div');
// description.classList.add('description');
// description.innerHTML = `Description: ${task.description}`;
// descriptionContainer.appendChild(description);
// taskContainer.appendChild(descriptionContainer);

// //due date
// let dueDateContainer = document.createElement('div');
// let dueDate = document.createElement('div');
// dueDate.classList.add('dueDate');
// dueDate.innerHTML = `Due: ${task.dueDate}`;
// dueDateContainer.appendChild(dueDate);
// taskContainer.appendChild(dueDateContainer);

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarSetup": () => /* binding */ sidebarSetup
/* harmony export */ });
/* harmony import */ var _popOutForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popOutForm */ "./src/popOutForm.js");
//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------
const sidebarSetup = (() => {
    console.log('sidebar module working');

    let addTaskButton = document.querySelector('.addTaskBtn');
    let popOutForm = document.querySelector('#popOutForm');
    let toggleContainer = document.querySelector('.toggleContainer');
    let sidebar = document.querySelector('.sidebar');
    let closeSidebarBtn = document.querySelector('.closeSidebarBtn');

    _popOutForm__WEBPACK_IMPORTED_MODULE_0__.submit;  //submit button function for storing new tasks
    
    //toggle sidebar functions
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('openNav');
        sidebar.classList.add('closeNav');
    })
    toggleContainer.addEventListener('click', () => {
        console.log('toggle container pushed');
        sidebar.classList.remove('closeNav');
        sidebar.classList.add('openNav');
    })
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
        sidebar.classList.remove('openNav');
        sidebar.classList.add('closeNav');
    });
})();
//SCRIPT---------------------------------------------------------


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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
//# sourceMappingURL=main.js.map