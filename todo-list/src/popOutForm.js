//CONST AND VARIABLES--------------------------------------------

//FUNCTIONS------------------------------------------------------
const submit = (() => {
    console.log('submit module working');
    let popOutForm = document.querySelector('#popOutForm');
    let submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener('click', () => {
        popOutForm.classList.remove('popOutFormOn');
        popOutForm.classList.add('popOutFormOff');
    });

})();
//SCRIPT---------------------------------------------------------
export {submit}
