// ***Start with sidebarSetup***

//CONST AND VARIABLES--------------------------------------------
let groups = [];
let groupSelected;
//FUNCTIONS------------------------------------------------------


const addNewGroup = (() => {
    //add new group in the sidebar menu.
    let newGroupBtn = document.querySelector('.newGroupBtn');
    let newGroupInputContainer = document.querySelector('.newGroupInputContainer');
    let newGroupTitle = document.querySelector('.newGroupTitle'); 
        //group title input
    let submitNewGroupBtn = document.querySelector('.submitNewGroupBtn');
    
    newGroupBtn.addEventListener('click', () => {
        //the code below will display the input to add new groups (current display is set to none in the HTML file.)
        newGroupInputContainer.setAttribute('style', 'display: initial');
    })

    submitNewGroupBtn.addEventListener('click', () => {
        groups.push(newGroupTitle.value);
        newGroupInputContainer.setAttribute('style', 'display: none');
        console.log([groups]);
        renderGroups();
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
        const name = groups[i];
        let groupContainer = document.createElement('div');
            groupContainer.classList.add('groupContainer');
            //functionality to select the group to display
            groupContainer.addEventListener('click', () => {
                groupSelected = groupTitle.dataset.group;
                console.log([groupSelected])
                console.log(`group selected: ${groups[groupSelected]}`);
            });
        
            let groupTitle = document.createElement('div');
                groupTitle.innerHTML = `${name}`;
                groupTitle.classList.add('groupTitle');
                groupTitle.dataset.group = `${i}`;
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
    console.log('sidebar module working');
    
    //add new group for tasks
    addNewGroup;
    //toggle open/close sidebar
    toggleSidebar;
    //render sidebar
})();
//SCRIPT---------------------------------------------------------
export {sidebarSetup, groupSelected};