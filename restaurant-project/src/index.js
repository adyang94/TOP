//CONST AND VARIABLES--------------------------------------------
import {homepageFramework} from './modules/homepage';
import {menuModule} from './modules/menu';
import {contactModule} from './modules/contact';
import {aboutUsModule} from './modules/aboutUs' ;
    /**IMPORTANT: curly braces around import necessary*/

let content = document.querySelector('#content');
let htmlHead = document.querySelector('#head');
let navButtonContainer = document.querySelector('.navButtonContainer');
let navSliderPage = document.querySelector('.navSliderPage');
let closeNavPage = document.querySelector('#closeNavPage');
let homepageTab = document.querySelector('#homepageTab');
let menuTab = document.querySelector('#menuTab');
let contactTab = document.querySelector('#contactTab');
let aboutUsTab = document.querySelector('#aboutUsTab');

//FUNCTIONS------------------------------------------------------
const tabs = (() => {
    //IMPORTANT:  Need to declare tab call functions before using them further down the script when using classes.
    function renderHomepage () {
        //function to erase content and call homepage module
        //import homepage module
        console.log('HELLO2');
    }
    return {
        renderHomepage
    }
})()
const navSlider = (() => {
    //toggle navigation page
    function open () {
        navSliderPage.classList.remove('closeNav');
        navSliderPage.classList.add('openNav');
    };
    function close () {
        navSliderPage.classList.remove('openNav');
        navSliderPage.classList.add('closeNav');
    };
    navButtonContainer.addEventListener('click', open);
    closeNavPage.addEventListener('click', close);
    return {
        close,
        open
    };
})()
const framework = (() => {
    let frameworkContent;
    let title = document.createElement('title');
    title.innerHTML = "Good Pho You!";
    htmlHead.appendChild(title);

    //tabs event listeners
    homepageTab.addEventListener('click', () => {
        console.log('1');
        console.log({frameworkContent});
        if(frameworkContent != 'homepage') {
            frameworkContent = 'homepage';
            reset();
            homepageFramework(); 
        }
        navSlider.close(title);
    });
    // menuTab.addEventListener('click', );
    // contactTab.addEventListener('click', );
    // aboutUsTab.addEventListener('click',);

    
    // tabs.renderHomepage();
    
    function reset() {
        /*function to erase page current page. Is this done by removeChild?  How to select the different elements in  the content container?*/
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
})()

//SCRIPT---------------------------------------------------------
export {content};
//NOTES----------------------------------------------------------
    /*
    IMPORTANT: check 'webpack.config.js'.  Make sure to include source map to help with debugging webpack optimized code <devtool: 'source-map',> .


    */