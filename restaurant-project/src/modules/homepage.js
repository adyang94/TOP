import {content} from '../index';
console.log('HOMEPAGE MODULE RUNNING');
export function homepageFramework () {
    // let content = document.querySelector('#content');
    let Introduction = document.createElement('h1');
    Introduction.innerHTML = 'Welcome to Thai Thani!';
    content.appendChild(Introduction);
    
}

