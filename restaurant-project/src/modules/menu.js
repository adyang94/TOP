import {content} from '../index';
export function menuFramework() {
    console.log('menu module working!');
    //appetizers
    let appetizersTitle = document.createElement('h3');
    appetizersTitle.classList.add('menuTitle');
    appetizersTitle.innerHTML = 'Appetizers';
    content.appendChild(appetizersTitle);

    let appetizers = document.createElement('p');
    appetizers.classList.add('appetizers');
    appetizers.innerHTML = 'Chicken Satay <br> Thai Spring Rolls <br> Pot Stickers';
    content.appendChild(appetizers);

    //lunch specials
    let lunchSpecialsTitle = document.createElement('h3');
    lunchSpecialsTitle.classList.add('menuTitle');
    lunchSpecialsTitle.innerHTML = 'Lunch Specials';
    content.appendChild(lunchSpecialsTitle); 
    //noodles
    //stir fry
    // fried rice
    // salad 
    // deserts 
    // drinks 
}