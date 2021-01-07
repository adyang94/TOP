//CONST AND VARIABLES--------------------------------------------
let popOutForm = document.querySelector('.popOutForm');

//FUNCTIONS------------------------------------------------------
const openPopOut = (() => {
    popOutForm.classList.remove('popOutFormOff');
    popOutForm.classList.add('popOutFormOn');
})()
//SCRIPT---------------------------------------------------------

