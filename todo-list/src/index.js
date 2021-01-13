//CONST AND VARIABLES--------------------------------------------
import {sidebarSetup} from "./sidebar";
import {popOutSetup} from "./popOutForm";
import {localStorageModule} from "./localStorage";

//FUNCTIONS------------------------------------------------------

//get old info
localStorageModule.getTasks();
localStorageModule.getGroups();
console.log('1');
sidebarSetup; //set up side bar
console.log('2');
popOutSetup;  //SET UP POP OUT FOR NEW TASKS


//create new tasks

//SCRIPT---------------------------------------------------------
console.log('JS working');