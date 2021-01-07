//CONST AND VARIABLES--------------------------------------------
import {submit} from './popOutForm';
//FUNCTIONS------------------------------------------------------
const sidebarSetup = (() => {
    console.log('sidebar module working');

    let addTaskButton = document.querySelector('.addTaskBtn');
    let popOutForm = document.querySelector('#popOutForm');

    submit;  //submit button 

    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
    });
})();
//SCRIPT---------------------------------------------------------
export {sidebarSetup};