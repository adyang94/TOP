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
        
    for(let i=0; i < tasks.length; i++){
        //task container
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        taskContainer.dataset.task = i;
        let taskText = document.createElement('p');
        taskText.innerHTML = 
            `
            <span class = "title">Title: ${tasks[i].title}</span><br>

            <span class = "description">Description: ${tasks[i].description}</span> <br>

            <span class = "dueDate">Due: ${tasks[i].dueDate}</span><br>`
        taskContainer.appendChild(taskText);

        //remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.dataset.task = i;
        removeBtn.innerHTML = 'X';
        console.log(`dataset btn: ${removeBtn.dataset.task}`);
        removeBtn.addEventListener('click', (event, srcElement) => {
            console.log(`dataset btn1: ${removeBtn.dataset.task}`);
            tasks.splice(event.srcElement.dataset.task, 1);
            renderTasks();
        })
        taskContainer.appendChild(removeBtn);
        
        //append all elements
        main.appendChild(taskContainer);
    }
    
}
//SCRIPT---------------------------------------------------------
export {renderTasks};





// //title
// let titleContainer = document.createElement('div');
// let title = document.createElement('div');
// title.classList.add('title');
// title.innerHTML = `Title: ${task.title} <br> `;
// titleContainer.appendChild(title);
// taskContainer.appendChild(titleContainer);

// //description
// let descriptionContainer = document.createElement('div');
// let description = document.createElement('div');
// description.classList.add('description');
// description.innerHTML = `Description: ${task.description}`;
// descriptionContainer.appendChild(description);
// taskContainer.appendChild(descriptionContainer);

// //due date
// let dueDateContainer = document.createElement('div');
// let dueDate = document.createElement('div');
// dueDate.classList.add('dueDate');
// dueDate.innerHTML = `Due: ${task.dueDate}`;
// dueDateContainer.appendChild(dueDate);
// taskContainer.appendChild(dueDateContainer);