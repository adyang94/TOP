(()=>{"use strict";var e={882:(e,n,t)=>{t.d(n,{k:()=>r});let r=document.querySelector("#content"),a=document.querySelector("#head"),o=document.querySelector(".navButtonContainer"),i=document.querySelector(".navSliderPage"),l=document.querySelector("#closeNavPage"),c=(document.querySelector("#homepageTab"),document.querySelector("#menuTab"),document.querySelector("#contactTab"),document.querySelector("#aboutUsTab"),document.querySelectorAll(".navLinks"));const d=(()=>{function e(){i.classList.remove("closeNav"),i.classList.add("openNav")}function n(){i.classList.remove("openNav"),i.classList.add("closeNav")}return o.addEventListener("click",e),l.addEventListener("click",n),{close:n,open:e}})();(()=>{let e,n,t=document.createElement("title");function o(t,a){if(console.log("renderselectedpage working"),e=t.srcElement.innerHTML,d.close(),e!=n)switch(function(){for(;r.firstChild;)r.removeChild(r.firstChild)}(),e){case"Homepage":n="Homepage",function(){console.log("HOMEPAGE MODULE RUNNING");let e=document.createElement("h3");e.classList.add("homepageIntroduction"),e.innerHTML="Welcome!",r.appendChild(e);let n=document.createElement("p");n.classList.add("homepageQuote"),n.innerHTML="For me, a good bowl of pho will always make me happy - Anthony Bourdain",r.appendChild(n);let t=document.createElement("p");t.classList.add("homepageDescription"),r.appendChild(t),t.innerHTML="Thai Thani is a premier restaurant in Seattle, WA focused on delivering a blend of the five main flavors included in most Thai meals: salty, sweet, sour, bitter, and spicy.  Come in and see why no one does it better than Thai Thani!"}();break;case"Menu":n="Menu",function(){console.log("menu module working!");let e=document.createElement("h3");e.classList.add("menuTitle"),e.innerHTML="Appetizers",r.appendChild(e);let n=document.createElement("p");n.classList.add("meals"),n.innerHTML="Chicken Satay <br> Thai Spring Rolls <br> Pot Stickers",r.appendChild(n);let t=document.createElement("h3");t.classList.add("menuTitle"),t.innerHTML="Lunch Specials",r.appendChild(t);let a=document.createElement("p");a.classList.add("meals"),a.innerHTML="Cashew Chicken <br> Mongolian Beef <br> Garlic Stir Fry <br> Pad Thai <br> Green Curry <br> Red Curry <br> Fried Rice <br> Tom Yum Chicken Soup",r.appendChild(a);let o=document.createElement("h3");o.classList.add("menuTitle"),o.innerHTML="Noodles",r.appendChild(o);let i=document.createElement("p");i.classList.add("meals"),i.innerHTML="Drunken Noodles <br> Lo Mein <br> Pad Kee Mao <br> Pad Thai <br> Pad Woon Sen <br> Pho Special Noodle Soup <br> Udon Noodle Soup <br> Seafood Pho",r.appendChild(i);let l=document.createElement("h3");l.classList.add("menuTitle"),l.innerHTML="Stir Fry",r.appendChild(l);let c=document.createElement("p");c.classList.add("meals"),c.innerHTML="Chicken with Broccoli <br> Beef with Broccoli <br> Basil Stir-Fry <br> Beef Pepper Steak <br> Garlic Pepper Stir-Fry <br> Sweet and Sour Chicken <br> Lava Chicken",r.appendChild(c);let d=document.createElement("h3");d.classList.add("menuTitle"),d.innerHTML="Fried Rice",r.appendChild(d);let s=document.createElement("p");s.classList.add("meals"),s.innerHTML="Combo Fried Rice <br> Chicken Fried Rice <br> Beef Fried Rice <br> Pineapple Fried Rice <br> Fried Rice with Basil <br> Vegetable Fried Rice",r.appendChild(s);let u=document.createElement("h3");u.classList.add("menuTitle"),u.innerHTML="Drinks",r.appendChild(u);let m=document.createElement("p");m.classList.add("meals"),m.innerHTML="Thai Iced Tea <br> Thai Iced Coffee <br> Fountain Drinks <br> Hot Tea <br> Bottled Water",r.appendChild(m)}();break;case"Contact":n="Contact",console.log("contact module working");break;case"About Us":n="About Us",console.log("About Us module working")}}t.innerHTML="Good Pho You!",a.appendChild(t),c.forEach((e=>{e.addEventListener("click",o)}))})()}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t(882)})();
//# sourceMappingURL=main.js.map