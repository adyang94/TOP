//CONST AND VARIABLES--------------------------------------------
import {homepageFramework} from './modules/homepage' 
    /**IMPORTANT: curly braces around import necessary*/

let content = document.querySelector('#content');
let htmlHead = document.querySelector('#head');

//FUNCTIONS------------------------------------------------------
const tabs = (() => {
    //IMPORTANT:  Need to declare tab call functions before using them further down the script when using classes.
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
const framework = (() => {
    let title = document.createElement('title');
    title.innerHTML = "Eat Moo Chicken Foo!";
    htmlHead.appendChild(title);
    
    let img = document.createElement('img');
    img.src = "../pictures/pho.jpg";
    content.appendChild(img);
    console.log('1');
    tabs.renderHomepage();
    
    function reset() {
        //function to erase page current page.
    }
    
    //Tabs
    
})()

//SCRIPT---------------------------------------------------------

//NOTES----------------------------------------------------------
    /*
    IMPORTANT: check 'webpack.config.js'.  Make sure to include source map to help with debugging webpack optimized code <devtool: 'source-map',> .


    */