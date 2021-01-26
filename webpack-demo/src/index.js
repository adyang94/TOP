import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.jpg';

function component () {
    const element = document.createElement('div');

    //Lodash is now imported by this script:
    element.innerHTML = myName('ady');
    element.classList.add('hello');
    
    // Add the image to existing div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    
    return element;
}
document.body.appendChild(component());