//CONST AND VARIABLES--------------------------------------------
import {homepageFramework} from './modules/homepage' 
    /**IMPORTANT: curly braces around import necessary*/

let content = document.querySelector('#content');
let htmlHead = document.querySelector('#head');

//FUNCTIONS------------------------------------------------------
const framework = (() => {
    let title = document.createElement('title');
    title.innerHTML = "Eat Moo Chicken Foo!";
    htmlHead.appendChild(title);
    
    let img = document.createElement('img');
    img.src = "../pictures/Chick-fil-A-logo.jpeg";
    content.appendChild(img);
    console.log('1');
    tabs.renderHomepage();
    
    function reset() {
        //function to erase page current page.
    }
    
    //Tabs
    
})()
const tabs = (() => {
    function renderHomepage () {
        //function to erase content and call homepage module
        //import homepage module
        homepageFramework();
        console.log('HELLO2');
    }
    return {
        renderHomepage
    }
})()

//SCRIPT---------------------------------------------------------