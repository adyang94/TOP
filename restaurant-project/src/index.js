//CONST AND VARIABLES--------------------------------------------
let content = document.querySelector('#content');
let htmlHead = document.querySelector('#head');

//FUNCTIONS------------------------------------------------------
const framework = (() => {
    let title = document.createElement('title');
    title.innerHTML = "Eat Moo Chicken Foo";
    htmlHead.appendChild(title);

    let img = document.createElement('img');
    img.src = "../pictures/Chick-fil-A-logo.jpeg";
    content.appendChild(img);
 
})()
//SCRIPT---------------------------------------------------------
