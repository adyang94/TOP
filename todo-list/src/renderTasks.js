//CONST AND VARIABLES--------------------------------------------
import {tasks} from './popOutForm';

//FUNCTIONS------------------------------------------------------

function renderTasks () {
    console.log('render tasks module working');
    console.log([tasks]);
    
    let main = document.querySelector('.main');

    //erase current tasks
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
        
    tasks.forEach((task) => {
        //task container
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        
        //title
        let titleContainer = document.createElement('div');
        let title = document.createElement('div');
        title.classList.add('title');
        title.innerHTML = task.title;
        titleContainer.appendChild(title);
        taskContainer.appendChild(titleContainer);

        //description
        let descriptionContainer = document.createElement('div');
        let description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = task.description;
        descriptionContainer.appendChild(description);
        taskContainer.appendChild(descriptionContainer);

        //due date
        let dueDateContainer = document.createElement('div');
        let dueDate = document.createElement('div');
        dueDate.classList.add('dueDate');
        dueDate.innerHTML = task.dueDate;
        dueDateContainer.appendChild(dueDate);
        taskContainer.appendChild(dueDateContainer);
        
        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.innerHTML = 'X';
        taskContainer.appendChild(removeBtn);
        
        //append all elements
        main.appendChild(taskContainer);
    })

}
//SCRIPT---------------------------------------------------------
export {renderTasks};