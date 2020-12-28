import {content} from '../index';
console.log('HOMEPAGE MODULE RUNNING');
export function homepageFramework () {
    //Introduction
    let Introduction = document.createElement('h3');
    Introduction.classList.add('homepageIntroduction');
    Introduction.innerHTML = 'Welcome!';
    content.appendChild(Introduction);
    //Quote
    let quote = document.createElement('p');
    quote.classList.add('homepageQuote');
    quote.innerHTML = 'For me, a good bowl of pho will always make me happy - Anthony Bourdain';
    content.appendChild(quote);
}

