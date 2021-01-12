//CONST AND VARIABLES--------------------------------------------

import { renderTasks } from "./renderTasks";


//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    
    function getTasks(tasks) {
        console.log(`GET TASKS FUNCTION WORKING -------------`);
        
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log([tasks]);
        renderTasks( '',tasks);
        
    };
    function getGroups() {
        console.log([groups]);
        
    };
    function storeTasksAndGroups(tasks, groups) {
        console.log('store tasks and groups-------------');
        localStorage.setItem("tasks", JSON.stringify(tasks))
        localStorage.setItem("groups", groups)
        console.log([localStorage]);
    };
    return {getTasks, getGroups, storeTasksAndGroups};
})();
//SCRIPT---------------------------------------------------------
export {
    localStorageModule,
};