//CONST AND VARIABLES--------------------------------------------
let groups = [];
let tasks = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    console.log('store tasks and groups');
    console.log(`array? ${groups} ${Array.isArray(groups)} ${typeof(groups)}`);
    
    function name(params) {
        
    }
    function getTasks() {
        console.log(`GET TASKS FUNCTION WORKING -------------`);
        tasks = Object.values(JSON.parse(localStorage.getItem('tasks')))
        console.log(tasks);
        return tasks;
    };
    function getGroups() {
        groups = Object.values(JSON.parse(localStorage.getItem('groups')));
        console.log(`getGroups ${groups}`);
        return groups;
    };
    function storeTasksAndGroups(tasks, groups) {
        if (tasks != '') {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        if (groups != '') {
            localStorage.setItem("groups", JSON.stringify(groups));
        }
        console.log([localStorage]);
    };
    function addNewInfo(newTask, newGroup) {
        if (newTask != '') {
            console.log(`task is array? ${tasks} ${Array.isArray(tasks)} ${typeof(tasks)}`);

            tasks.push(newTask);
        }
        if (newGroup != '') {
            groups.push(newGroup);
        }
        console.log(tasks);
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