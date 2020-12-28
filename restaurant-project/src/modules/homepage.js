import {content} from '../index';
console.log('HOMEPAGE MODULE RUNNING');
export function homepageFramework () {
    //Introduction
    let Introduction = document.createElement('h1');
    Introduction.classList.add('homepageIntroduction');
    Introduction.innerHTML = 'Welcome!';
    content.appendChild(Introduction);
    
}

