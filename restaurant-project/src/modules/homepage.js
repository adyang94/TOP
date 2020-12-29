import {content} from '../index';
export function homepageFramework () {
    console.log('HOMEPAGE MODULE RUNNING');
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
    //Description of Thai food and Thai Thani
    let description = document.createElement('p');
    description.classList.add('homepageDescription');
    content.appendChild(description);
    description.innerHTML = 'Thai Thani is a premier restaurant in Seattle, WA focused on delivering a blend of the five main flavors included in most Thai meals: salty, sweet, sour, bitter, and spicy.  Come in and see why no one does it better than Thai Thani!'
}

