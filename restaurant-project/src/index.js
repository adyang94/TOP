//CONST AND VARIABLES--------------------------------------------
let content = document.querySelector('#content');
let htmlHead = document.querySelector('#head');

import homepageFramework from './modules/homepage'
//FUNCTIONS------------------------------------------------------
const framework = (() => {
    let title = document.createElement('title');
    title.innerHTML = "Eat Moo Chicken Foo";
    htmlHead.appendChild(title);

    let img = document.createElement('img');
    img.src = "../pictures/Chick-fil-A-logo.jpeg";
    content.appendChild(img);
    
    function renderHomepage () {
        //function to erase content and call homepage module
        reset();
        homepageFramework
        //import homepage module

    }

    function reset() {
        //function to erase page current page.
    }
})()

//SCRIPT---------------------------------------------------------
