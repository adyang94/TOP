(()=>{"use strict";var e={882:(e,t,n)=>{n.d(t,{k:()=>o});let o=document.querySelector("#content"),a=document.querySelector("#head"),c=document.querySelector(".navButtonContainer"),r=document.querySelector(".navSliderPage"),l=document.querySelector("#closeNavPage"),i=(document.querySelector("#homepageTab"),document.querySelector("#menuTab"),document.querySelector("#contactTab"),document.querySelector("#aboutUsTab"),document.querySelectorAll(".navLinks"));const s=(()=>{function e(){r.classList.remove("closeNav"),r.classList.add("openNav")}function t(){r.classList.remove("openNav"),r.classList.add("closeNav")}return c.addEventListener("click",e),l.addEventListener("click",t),{close:t,open:e}})();(()=>{let e,t,n=document.createElement("title");function c(n,a){if(console.log("renderselectedpage working"),e=n.srcElement.innerHTML,s.close(),e!=t)switch(function(){for(;o.firstChild;)o.removeChild(o.firstChild)}(),e){case"Homepage":t="Homepage",function(){console.log("HOMEPAGE MODULE RUNNING");let e=document.createElement("h3");e.classList.add("homepageIntroduction"),e.innerHTML="Welcome!",o.appendChild(e);let t=document.createElement("p");t.classList.add("homepageQuote"),t.innerHTML="For me, a good bowl of pho will always make me happy - Anthony Bourdain",o.appendChild(t);let n=document.createElement("p");n.classList.add("homepageDescription"),o.appendChild(n),n.innerHTML="Thai Thani is a premier restaurant in Seattle, WA focused on delivering a blend of the five main flavors included in most Thai meals: salty, sweet, sour, bitter, and spicy.  Come in and see why no one does it better than Thai Thani!"}();break;case"Menu":t="Menu",function(){console.log("menu module working!");let e=document.createElement("h3");e.classList.add("menuTitle"),e.innerHTML="Appetizers",o.appendChild(e);let t=document.createElement("p");t.classList.add("appetizers"),t.innerHTML="Chicken Satay <br> Thai Spring Rolls <br> Pot Stickers",o.appendChild(t);let n=document.createElement("h3");n.classList.add("menuTitle"),n.innerHTML="Lunch Specials",o.appendChild(n)}();break;case"Contact":t="Contact",console.log("contact module working");break;case"About Us":t="About Us",console.log("About Us module working")}}n.innerHTML="Good Pho You!",a.appendChild(n),i.forEach((e=>{e.addEventListener("click",c)}))})()}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(882)})();
//# sourceMappingURL=main.js.map