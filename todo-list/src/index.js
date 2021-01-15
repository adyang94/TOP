//CONST AND VARIABLES--------------------------------------------
import {renderGroups, sidebarSetup} from "./sidebar";
import {popOutSetup} from "./popOutForm";
import {groups, localStorageModule, tasks} from "./localStorage";
import { renderTasks } from "./renderTasks";

//FUNCTIONS------------------------------------------------------

//get old info
console.log('1');
renderTasks('', localStorageModule.getTasks());

console.log('2');
renderGroups(localStorageModule.getGroups());

//create new tasks

//SCRIPT---------------------------------------------------------
console.log('JS working');