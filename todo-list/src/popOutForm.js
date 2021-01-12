//CONST AND VARIABLES--------------------------------------------
import {localStorageModule} from "./localStorage";
import {renderTasks} from './renderTasks';
import { groups } from "./sidebar";

let tasks = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------

const popOutSetup = (() => {
    console.log('popOut setup working---------------------------');
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
    tasks[2] = {
        'title': 'test chore1',
        'description': 'test description',
        'dueDate': '1/1/2021',
        'taskGroup': 'test chores'
    }
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');
    let popOutTitle = document.querySelector('.popOutTitle');
    let popOutDescription = document.querySelector('.popOutDescription');
    let popOutDueDate = document.querySelector('.popOutDueDate');
    let newTask;
    let addTaskButton = document.querySelector('.addTaskBtn');
    let popOutGroup = document.querySelector('.popOutGroup');

    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');

        newTask = new addNewTask(popOutTitle, popOutDescription, popOutDueDate, popOutGroup);
        tasks.push(newTask);
    
        console.log([tasks]);
        localStorageModule.storeTasksAndGroups(tasks, groups);
        
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

function addNewTask(title, description, dueDate, group) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    this.taskGroup = group.value;

}
//SCRIPT---------------------------------------------------------
export {
    popOutSetup,
    tasks
}
