// ***Start with sidebarSetup***
import {groups, groupSelected, localStorageModule, tasks} from "./localStorage";
import { renderTasks } from "./renderTasks";

//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------
const addNewGroup = (() => {
    //add new group in the sidebar menu.
    let newGroupBtn = document.querySelector('.newGroupBtn');
    let newGroupInputContainer = document.querySelector('.newGroupInputContainer');
    let newGroupTitle = document.querySelector('.newGroupTitle'); 
        //group title input
    let submitNewGroupBtn = document.querySelector('.submitNewGroupBtn');
    
    console.log(`Is groups an array1? ${Array.isArray(groups)}`);

    newGroupBtn.addEventListener('click', () => {
        //the code below will display the input to add new groups (current display is set to none in the HTML file.)
        newGroupInputContainer.setAttribute('style', 'display: initial');
    })
    submitNewGroupBtn.addEventListener('click', () => {
        //SUBMIT AND CREATE NEW GROUP
        let newGroup = newGroupTitle.value;

        localStorageModule.addNewInfo('', newGroup);
        newGroupInputContainer.setAttribute('style', 'display: none');
        localStorageModule.storeTasksAndGroups(groups, tasks);
        renderGroups();
        localStorageModule.storeTasksAndGroups(tasks, groups);
    })
})();
function renderGroups() {
    let groupsContainer = document.querySelector('.groupsContainer');
    //remove all groups and render again.
    while(groupsContainer.firstChild) {
        groupsContainer.removeChild(groupsContainer.firstChild);
    };
    //rendering groups
    for (let i = 0; i < groups.length; i++) {
        console.log('hello********************');
        console.log(`Is groups an array? ${Array.isArray(groups)}`);

        let name = groups[i];
        
        let groupContainer = document.createElement('div');
            groupContainer.classList.add('groupContainer');
            
            //functionality to click on the group name
            groupContainer.addEventListener('click', () => {
                groupSelected = groupTitle.dataset.group;
                renderTasks(groupSelected, tasks);

                console.log(`group selected: ${groupSelected}`);
                console.log([groups]);
            });
            let groupTitle = document.createElement('div');
                console.log([name]);
                groupTitle.innerHTML = `${name}`;
                console.log(`${groupTitle.innerHTML}`);
                groupTitle.classList.add('groupTitle');
                groupTitle.dataset.group = `${name}`;
                groupContainer.appendChild(groupTitle);

            let groupRemoveBtn = document.createElement('button');
                groupRemoveBtn.innerHTML = 'X';
                groupRemoveBtn.classList.add('groupRemoveBtn');
                groupRemoveBtn.dataset.group = `${i}`;
                //remove group button
                groupRemoveBtn.addEventListener('click', (event, srcElement) => {
                    groups.splice(event.srcElement.dataset.group, 1)
                    renderGroups();
                })
                groupContainer.appendChild(groupRemoveBtn);
        groupsContainer.appendChild(groupContainer);
    }
}

const toggleSidebar = (() => {
    let closeSidebarBtn = document.querySelector('.closeSidebarBtn');
    let toggleContainer = document.querySelector('.toggleContainer');
    let sidebar = document.querySelector('.sidebar');
    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('openNav');
        sidebar.classList.add('closeNav');
    })
    toggleContainer.addEventListener('click', () => {
        console.log('toggle container pushed');
        sidebar.classList.remove('closeNav');
        sidebar.classList.add('openNav');
    })
})();
const sidebarSetup = (() => {
    console.log('sidebar setup working');
    //render existing groups
    // groups[0] = "test group";
    // groups[1] = 'test chores';
    renderGroups(groupSelected);
    //add new group for tasks
    addNewGroup;
    //toggle open/close sidebar
    toggleSidebar;
    //render sidebar
})();
//SCRIPT---------------------------------------------------------
export {sidebarSetup, renderGroups};