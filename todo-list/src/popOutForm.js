//CONST AND VARIABLES--------------------------------------------
import {renderTasks} from './renderTasks';

let tasks = [];
//FUNCTIONS------------------------------------------------------

const popOutSetup = (() => {
    let groupSelected = 'x';
    
    console.log('popOut setup working');
    tasks[0] = {
        'title': 'test title',
        'description': 'test description',
        'dueDate': '1/1/01',
        'taskGroup': 'test group'
    };
    tasks[1] = {
        'title': 'test chore',
        'description': 'test description',
        'dueDate': '1/1/01',
        'taskGroup': 'test chores'
    };
    tasks[2] = 
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
        renderTasks(groupSelected, tasks);
    });
    addTaskButton.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOff');
        popOutForm.classList.add('popOutFormOn');
    });
    renderTasks(groupSelected, tasks);
    return {
        tasks
    };
})();

function addNewTask(title, description, dueDate) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    this.taskGroup = 'test group';

}
//SCRIPT---------------------------------------------------------
export {
    popOutSetup,
    tasks
}
