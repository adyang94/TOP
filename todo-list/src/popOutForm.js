//CONST AND VARIABLES--------------------------------------------
let tasks = [];
//FUNCTIONS------------------------------------------------------
const submit = (() => {
    console.log('submit module working');
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');
    let popOutTitle = document.querySelector('.popOutTitle');
    let popOutDescription = document.querySelector('.popOutDescription');
    let popOutDueDate = document.querySelector('.popOutDueDate');


    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');
        addNewTask()

    });

})();

function addNewTask(title, description, dueDate) {
    
}
//SCRIPT---------------------------------------------------------
export {submit}
