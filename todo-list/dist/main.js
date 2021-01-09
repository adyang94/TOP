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
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
/* harmony import */ var _popOutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popOutForm */ "./src/popOutForm.js");
//CONST AND VARIABLES--------------------------------------------




//FUNCTIONS------------------------------------------------------

//get old info
console.log('1');
_sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarSetup; //set up side bar
console.log('2');
_popOutForm__WEBPACK_IMPORTED_MODULE_2__.popOutSetup;  //SET UP POP OUT FOR NEW TASKS


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
/* harmony export */   "popOutSetup": () => /* binding */ popOutSetup,
/* harmony export */   "tasks": () => /* binding */ tasks,
/* harmony export */   "groupSelected": () => /* binding */ groupSelected
/* harmony export */ });
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
//CONST AND VARIABLES--------------------------------------------

let tasks = [];
let groupSelected = 'x';

//FUNCTIONS------------------------------------------------------
const popOutSetup = (() => {
    
    console.log('popOut setup working');
    tasks[0] = {
        'title': 'test title',
        'description': 'test description',
        'dueDate': '1/1/01',
        'taskGroup': 'test group'
    };
    tasks[1] = {
        'title': 'test chore',
        'description': 'test description',
        'dueDate': '1/1/01',
        'taskGroup': 'test chore'
    }

    
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');
    let popOutTitle = document.querySelector('.popOutTitle');
    let popOutDescription = document.querySelector('.popOutDescription');
    let popOutDueDate = document.querySelector('.popOutDueDate');
    let newTask;
    let addTaskButton = document.querySelector('.addTaskBtn');

    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');
        
        newTask = new addNewTask(popOutTitle, popOutDescription, popOutDueDate);
        tasks.push(newTask);

        console.log([tasks]);
        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    });
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
    });
    (0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
})();

function addNewTask(title, description, dueDate) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    this.taskGroup = 'test group';

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

        console.log(`group selected: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected}`);
        if (_popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected) {

            if (_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks.taskGroup !== _popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected) {
                break;
            };
        };
        taskText.innerHTML = 
            `
            <span class = "title">Title: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}</span><br>

            <span class = "description">Description: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].description}</span> <br>

            <span class = "dueDate">Due: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].dueDate}</span><br>
            <span class = "taskGroup">Group: ${_popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks[i].taskGroup}</span><br>`;
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
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ "./src/renderTasks.js");
// ***Start with sidebarSetup***
let groups = [];




//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------
const addNewGroup = (() => {
    //add new group in the sidebar menu.
    let newGroupBtn = document.querySelector('.newGroupBtn');
    let newGroupInputContainer = document.querySelector('.newGroupInputContainer');
    let newGroupTitle = document.querySelector('.newGroupTitle'); 
        //group title input
    let submitNewGroupBtn = document.querySelector('.submitNewGroupBtn');
    
    newGroupBtn.addEventListener('click', () => {
        //the code below will display the input to add new groups (current display is set to none in the HTML file.)
        newGroupInputContainer.setAttribute('style', 'display: initial');
    })

    submitNewGroupBtn.addEventListener('click', () => {
        //SUBMIT AND CREATE NEW GROUP
        let newGroup = new createGroup(newGroupTitle.value, _popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks);
        groups.push(newGroup);
        newGroupInputContainer.setAttribute('style', 'display: none');
        console.log([groups]);
        renderGroups();
    })
})();
function renderGroups() {
    let groupsContainer = document.querySelector('.groupsContainer');
    //remove all groups and render again.
    while(groupsContainer.firstChild) {
        groupsContainer.removeChild(groupsContainer.firstChild);
    };
    //rendering groups
    for (let i = 0; i < groups.length; i++) {
        const name = groups[i].groupName;
        let groupContainer = document.createElement('div');
            groupContainer.classList.add('groupContainer');
            
            //functionality to click on the group name
            groupContainer.addEventListener('click', () => {
                _popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected = groupTitle.dataset.group;
                
                (0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected);

                console.log(`group selected: ${name}`);
                console.log([groups]);
            });
        
            let groupTitle = document.createElement('div');
                groupTitle.innerHTML = `${name}`;
                groupTitle.classList.add('groupTitle');
                groupTitle.dataset.group = `${i}`;
                groupContainer.appendChild(groupTitle);

            let groupRemoveBtn = document.createElement('button');
                groupRemoveBtn.innerHTML = 'X';
                groupRemoveBtn.classList.add('groupRemoveBtn');
                groupRemoveBtn.dataset.group = `${i}`;
                //remove group button
                groupRemoveBtn.addEventListener('click', (event, srcElement) => {
                    groups.splice(event.srcElement.dataset.group, 1)
                    renderGroups();
                })
                groupContainer.appendChild(groupRemoveBtn);
        groupsContainer.appendChild(groupContainer);
    }
}
function createGroup(title, associatedTasks) {
    this.groupName = title;
    this.groupTasks = associatedTasks;
}

const toggleSidebar = (() => {
    let closeSidebarBtn = document.querySelector('.closeSidebarBtn');
    let toggleContainer = document.querySelector('.toggleContainer');
    let sidebar = document.querySelector('.sidebar');
    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('openNav');
        sidebar.classList.add('closeNav');
    })
    toggleContainer.addEventListener('click', () => {
        console.log('toggle container pushed');
        sidebar.classList.remove('closeNav');
        sidebar.classList.add('openNav');
    })
})();
const sidebarSetup = (() => {
    console.log('sidebar setup working');
    //render existing groups
    groups[0] = {
        'groupName': "test group",
        'groupTasks': _popOutForm__WEBPACK_IMPORTED_MODULE_0__.tasks
    };
    groups[1] = {
        'groupName': 'test chores',
        'groupTasks': []
    };
    renderGroups(_popOutForm__WEBPACK_IMPORTED_MODULE_0__.groupSelected);
    //add new group for tasks
    addNewGroup;
    //toggle open/close sidebar
    toggleSidebar;
    //render sidebar
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