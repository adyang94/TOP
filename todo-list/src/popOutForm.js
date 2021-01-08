//CONST AND VARIABLES--------------------------------------------
let tasks = [];
import {renderTasks} from './renderTasks';
//FUNCTIONS------------------------------------------------------
const submit = (() => {
    console.log('submit module working');
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
        renderTasks();
    });
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
    });
})();

function addNewTask(title, description, dueDate) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;

}
//SCRIPT---------------------------------------------------------
export {
    submit,
    tasks
}
