// ***Start with sidebarSetup***

//CONST AND VARIABLES--------------------------------------------
let groups = [];
//FUNCTIONS------------------------------------------------------


const addNewGroup = (() => {
    let newGroupBtn = document.querySelector('.newGroupBtn');
    let newGroupInputContainer = document.querySelector('.newGroupInputContainer');
    let newGroupTitle = document.querySelector('.newGroupTitle');
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
    let groupContainer = document.querySelector('.groupContainer');
    while(groupContainer.firstChild) {
        groupContainer.removeChild(groupContainer.firstChild);
    };
    console.log(`${groups.length}`);
    for (let i = 0; i < groups.length; i++) {
        const name = groups[i];
        let newGroup = document.createElement('div');
        newGroup.innerHTML = `${name}`;
        newGroup.classList.add('groups');
        groupContainer.appendChild(newGroup);
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
export {sidebarSetup};