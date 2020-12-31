import {content} from '../index';
export function menuFramework() {
    console.log('menu module working!');
    //appetizers
    let appetizersTitle = document.createElement('h3');
    appetizersTitle.classList.add('menuTitle');
    appetizersTitle.innerHTML = 'Appetizers';
    content.appendChild(appetizersTitle);

    let appetizers = document.createElement('p');
    appetizers.classList.add('meals');
    appetizers.innerHTML = 'Chicken Satay <br> Thai Spring Rolls <br> Pot Stickers';
    content.appendChild(appetizers);

    //lunch specials
    let lunchSpecialsTitle = document.createElement('h3');
    lunchSpecialsTitle.classList.add('menuTitle');
    lunchSpecialsTitle.innerHTML = 'Lunch Specials';
    content.appendChild(lunchSpecialsTitle); 

    let lunchSpecials = document.createElement('p');
    lunchSpecials.classList.add('meals');
    lunchSpecials.innerHTML = 'Cashew Chicken <br> Mongolian Beef <br> Garlic Stir Fry <br> Pad Thai <br> Green Curry <br> Red Curry <br> Fried Rice <br> Tom Yum Chicken Soup';
    content.appendChild(lunchSpecials);

    //noodles
    let noodlesTitle = document.createElement('h3');
    noodlesTitle.classList.add('menuTitle');
    noodlesTitle.innerHTML = 'Noodles';
    content.appendChild(noodlesTitle);

    let noodles = document.createElement('p');
    noodles.classList.add('meals');
    noodles.innerHTML = 'Drunken Noodles <br> Lo Mein <br> Pad Kee Mao <br> Pad Thai <br> Pad Woon Sen <br> Pho Special Noodle Soup <br> Udon Noodle Soup <br> Seafood Pho';
    content.appendChild(noodles);
    
    //stir fry
    let stirFryTitle = document.createElement('h3');
    stirFryTitle.classList.add('menuTitle');
    stirFryTitle.innerHTML = 'Stir Fry';
    content.appendChild(stirFryTitle);

    let stirFry = document.createElement('p');
    stirFry.classList.add('meals');
    stirFry.innerHTML = 'Chicken with Broccoli <br> Beef with Broccoli <br> Basil Stir-Fry <br> Beef Pepper Steak <br> Garlic Pepper Stir-Fry <br> Sweet and Sour Chicken <br> Lava Chicken';
    content.appendChild(stirFry);
    // fried rice
    // salad 
    // deserts 
    // drinks 
}