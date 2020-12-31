import {content} from '../index';
export function aboutUsFramework() {
    console.log('aboutUs module working!');
    
    let tabs = document.createElement('div');
    tabs.classList.add('tabs');
    content.appendChild(tabs);
        // Setting the up the appetizers tab
        let appetizersTab = document.createElement('input');
        appetizersTab.type = 'radio';
        appetizersTab.name = 'tabs';
        appetizersTab.id = 'appetizersTab';
        appetizersTab.checked = 'checked';
        // appetizersTab.setAttribute = ("name", "tabs");
        // appetizersTab.setAttribute = ('id', 'appetizersTab');
        // appetizersTab.setAttribute = ('checked', 'checked');
        tabs.appendChild(appetizersTab);
        
        let appetizersTabLabel = document.createElement('label');
        appetizersTabLabel.innerHTML = 'Appetizer';
        appetizersTabLabel.setAttribute('for','appetizersTab');
        tabs.appendChild(appetizersTabLabel);
        
        let appetizerContainer = document.createElement('div');
        tabs.appendChild(appetizerContainer);
        appetizerContainer.classList.add('tab');
            let appetizerHeader = document.createElement('h3');
            appetizerHeader.innerHTML = 'Appetizers';
            appetizerContainer.appendChild(appetizerHeader);

            let appetizers = document.createElement('p');
            appetizers.innerHTML = 'Chicken Satay <br> Thai Spring Rolls <br> Pot Stickers';
            appetizerContainer.appendChild(appetizers);
        //Setting up entrees
        let entreesTab = document.createElement('input');
        entreesTab.type = 'radio';
        entreesTab.name = 'tabs';
        entreesTab.id = 'entreesTab';
        entreesTab.checked = 'checked';
        tabs.appendChild(entreesTab);
        
        let entreesTabLabel = document.createElement('label');
        entreesTabLabel.innerHTML = 'Entrees';
        tabs.appendChild(entreesTabLabel);
        entreesTabLabel.setAttribute('for', 'entreesTab');
        
        let entreesContainer = document.createElement('div');
        tabs.appendChild(entreesContainer);
        entreesContainer.classList.add('tab');
            let entreesHeader = document.createElement('h3');
            entreesHeader.innerHTML = 'Entrees';
            entreesContainer.appendChild(entreesHeader);

            let entrees = document.createElement('p');
            entrees.innerHTML = 'Drunken Noodles <br> Lo Mein <br> Pad Kee Mao <br> Pad Thai <br> Pad Woon Sen <br> Pho Special Noodle Soup <br> Udon Noodle Soup <br> Seafood Pho <br> Chicken with Broccoli <br> Beef with Broccoli <br> Basil Stir-Fry <br> Beef Pepper Steak <br> Garlic Pepper Stir-Fry <br> Sweet and Sour Chicken <br> Lava Chicken <br> Combo Fried Rice <br> Chicken Fried Rice <br> Beef Fried Rice <br> Pineapple Fried Rice <br> Fried Rice with Basil <br> Vegetable Fried Rice <br> ';
            entreesContainer.appendChild(entrees);
        
        // Setting up drinks tab
        let drinksTab = document.createElement('input');
        drinksTab.type = 'radio';
        drinksTab.name = 'tabs';
        drinksTab.id = 'drinksTab';
        drinksTab.checked = 'checked';
        tabs.appendChild(drinksTab);
        
        let drinksTabLabel = document.createElement('label');
        drinksTabLabel.innerHTML = 'Drinks';
        tabs.appendChild(drinksTabLabel);
        
        drinksTabLabel.setAttribute('for', 'drinksTab');
        
        let drinksContainer = document.createElement('div');
        tabs.appendChild(drinksContainer);
        drinksContainer.classList.add('tab');
            let drinksHeader = document.createElement('h3');
            drinksHeader.innerHTML = 'Drinks';
            drinksContainer.appendChild(drinksHeader);

            let drinks = document.createElement('p');
            drinks.innerHTML = 'Thai Iced Tea <br> Thai Iced Coffee <br> Fountain Drinks <br> Hot Tea <br> Bottled Water';
            drinksContainer.appendChild(drinks);
}