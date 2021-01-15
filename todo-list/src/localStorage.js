//CONST AND VARIABLES--------------------------------------------
let groups = [];
let tasks = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    console.log('store tasks and groups-------------');
    console.log(`array? ${groups} ${Array.isArray(groups)} ${typeof(groups)}`);
    
    function getTasks(tasks) {
        console.log(`GET TASKS FUNCTION WORKING -------------`);
        
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[0] = {
            "title": "hi"
        };
        console.log([tasks]);
        return tasks;
    };
    function getGroups() {
        groups = JSON.parse(localStorage.getItem('groups'));
        groups[0] = 'hi';
        groups[1] = 'helloooo';
        console.log(`getGroups ${groups}`);
        return groups;
    };
    function storeTasksAndGroups(tasks, groups) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("groups", JSON.stringify(groups));
        console.log([localStorage]);
    };
    function addNewInfo(newTask, newGroup) {
        if (tasks != '') {
            tasks.push(newTask);
        }
        if (newGroup != '') {
            groups.push(newGroup);
        }
        storeTasksAndGroups(tasks, groups);
    }
    return {getTasks, getGroups, storeTasksAndGroups, addNewInfo};
})();
//SCRIPT---------------------------------------------------------
export {
    localStorageModule,
    groups,
    tasks,
    groupSelected
};