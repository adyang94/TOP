//CONST AND VARIABLES--------------------------------------------
import {submit} from './popOutForm';
//FUNCTIONS------------------------------------------------------
const sidebarSetup = (() => {
    console.log('sidebar module working');

    let addTaskButton = document.querySelector('.addTaskBtn');
    let popOutForm = document.querySelector('#popOutForm');
    let toggleContainer = document.querySelector('.toggleContainer');
    let sidebar = document.querySelector('.sidebar');
    let closeSidebarBtn = document.querySelector('.closeSidebarBtn');

    submit;  //submit button function for storing new tasks
    
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
    });
})();
//SCRIPT---------------------------------------------------------
export {sidebarSetup};