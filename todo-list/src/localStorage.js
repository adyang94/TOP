//CONST AND VARIABLES--------------------------------------------

import { renderTasks } from "./renderTasks";
import {renderGroups} from "./sidebar";


//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    
    function getTasks(tasks) {
        console.log(`GET TASKS FUNCTION WORKING -------------`);
        
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log([tasks]);
        renderTasks( '',tasks);
    };
    function getGroups() {
        groups = JSON.parse(localStorage.getItem('groups'));
        console.log([groups]);
        renderGroups();
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