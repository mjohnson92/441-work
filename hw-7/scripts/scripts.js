/* Creating variables and nodes*/

let body = document.body;
let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement('p');
let elChild3 = document.createElement('P');
let textEl = document.querySelector(".route1-paragraph");
let textEl2 = document.querySelector(".route2-paragraph");
let textEl3 = document.querySelector(".first-paragraph");
let textEl4 = document.querySelector(".valley-paragraph");
let textEl5 = document.querySelector(".cave-paragraph");
let textEl6 = document.querySelector(".end-paragraph");
let btEl = document.querySelector('#b1');
let btEl2 = document.querySelector('#b2');
let btEl3 = document.querySelector('#b3');
let btEl4 = document.querySelector('#b4');
let divEl1 = document.querySelector(".storageDiv");
let formEl1 = document.querySelector(".nameForm");


/* adding text to nodes and styling*/

elChild.innerText = "Good Luck!";
elChild2.innerText= "hw-7";
elChild3.innerText="created by Michael Johnson";
elChild.setAttribute("style","padding:0em; margin:0; font-style:normal; text-align:center; color: white;");
elChild2.setAttribute("style","padding:0em; margin:0; font-style:normal; text-align:center; color: white;");
elChild3.setAttribute("style","padding:0em; margin:0;  font-style:normal;  text-align:center; color: white;");

/* Adding event listeners for buttons*/

btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);
btEl3.addEventListener("click", showHideText3);
btEl4.addEventListener("click", showHideText4);

/* name text insert for text input*/
function insertText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    let textToAdd = document.createTextNode("Hello "+textIn+", welcome! Which route will you take?");

    let newP = document.createElement("P");

    newP.appendChild(textToAdd);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP);
}

  document.querySelector("#runButton").addEventListener( 'click',insertText);

  /* functions that show and hide buttons, text, and backgrounds*/

  function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Go Back?";
        btEl3.innerText = "Head Further East";
        textEl6.hidden = true;
        textEl5.hidden = true;
        textEl4.hidden = true;
        btEl3.hidden = false;
        btEl4.hidden = true;
        textEl.hidden = false;
        formEl1.hidden = true;
        divEl1.hidden= true;
        textEl3.hidden = true;
        textEl2.hidden= true;
        btEl2.hidden=true;
        el.hidden=true;

        body.style.background = "url('./images/mountain2.jpg')";


    } else {
        btEl.innerText = "Walk East";
        btEl3.hidden = true;
        textEl.hidden = true;
        btEl4.hidden = true;
        formEl1.hidden = false;
        divEl1.hidden=false;
        textEl3.hidden=false;
        btEl2.hidden=false;
        el.hidden=false;

        body.style.background = "url('./images/mountain1.jpg')";
        body.style.backgroundPosition = "center";
      }
}

function showHideText2() {
    if(textEl2.hidden){
        btEl2.innerText = "Go Back?";
        btEl4.innerText = "Head Further West"
        textEl6.hidden = true;
        btEl2.hidden = false;
        btEl3.hidden = true;
        btEl4.hidden = false;
        textEl2.hidden = false;
        textEl5.hidden = true;
        formEl1.hidden= true;
        divEl1.hidden=true;
        textEl3.hidden=true;
        textEl.hidden=true;
        btEl.hidden=true;
        el.hidden=true;

        body.style.background = "url('images/mountain3.jpg')";



} else {
      btEl2.innerText = "Walk West";
      btEl2.hidden = false;
      textEl2.hidden = true;
      btEl4.hidden = true;
      btEl3.hidden = true;
      formEl1.hidden=false;
      divEl1.hidden= false;
      textEl3.hidden=false;
      btEl.hidden=false;
      el.hidden=false;

      body.style.background = "url('./images/mountain1.jpg')";
      body.style.backgroundPosition = "center";
    }
}

function showHideText3() {
  if(textEl.hidden){
      btEl.innerText = "Go Back?"
      textEl6.hidden = false;
      textEl5.hidden = true;
      textEl4.hidden = true;
      btEl3.hidden = true;
      btEl.hidden=false;
      btEl2.hidden=true;
      textEl.hidden = true;
      formEl1.hidden = true;
      divEl1.hidden= true;
      textEl3.hidden = true;
      textEl2.hidden= true;
      btEl4.hidden=true;
      el.hidden=true;


      body.style.background = "url('./images/end.jpg')";
      alert("Home at last!");


  } else {
      btEl3.innerText = "Keep Going?";
      btEl.innerText = "Go Back?"
      textEl4.hidden = false;
      btEl.hidden=false;
      btEl2.hidden=true;
      textEl.hidden = true;
      formEl1.hidden = true;
      divEl1.hidden=true;
      textEl3.hidden=true;
      btEl4.hidden=true;
      el.hidden=true;

      body.style.background = "url('./images/mountain4.jpg')";
    }
}

function showHideText4() {
  if(textEl.hidden){
      btEl2.innerText = "Go Back?"
      btEl3.hidden = false;
      btEl.hidden = true;
      btEl4.hidden = true
      textEl.hidden = true;
      formEl1.hidden = true;
      divEl1.hidden= true;
      textEl3.hidden = true;
      textEl2.hidden= true;
      textEl5.hidden= false;
      btEl3.hidden=true;
      el.hidden=true;

      body.style.background = "url('./images/cave1.jpg')";
        alert("Oh no you died!");


  } else {
      btEl4.innerText = "Keep Going? Eh";
      btEl2.innerText = "Go Back?"
      btEl2.hidden = false;
      btEl4.hidden = false;
      btEl3.hidden = true;
      btEl.hidden = true;
      textEl.hidden = true;
      formEl1.hidden = false;
      divEl1.hidden=false;
      textEl3.hidden=false;
      btEl3.hidden=false;
      el.hidden=false;

      body.style.background = "url('./images/mountain1.jpg')";
      body.style.backgroundPosition = "center";
    }
}

/* body styling and main background image */

body.style.padding = "0 em";
body.style.margin="0 em";
body.style.background = "url('./images/mountain1.jpg')";
body.style.backgroundPosition = "center";

el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3)
body.appendChild(el);
