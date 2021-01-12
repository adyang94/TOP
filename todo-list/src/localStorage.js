//CONST AND VARIABLES--------------------------------------------


//FUNCTIONS------------------------------------------------------
const localStorageModule = (() => {
    
    function getTasks() {
        
    };
    function getGroups() {
        
    };
    function storeTasksAndGroups() {
        console.log('hello12');
        // localStorage.setItem("tasks", tasks)
    };
    return {getTasks, getGroups, storeTasksAndGroups};
})();
//SCRIPT---------------------------------------------------------
export {
    localStorageModule,
};