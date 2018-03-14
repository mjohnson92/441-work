/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/

var myImage = new Image (750, 750);
myImage.src = "../hw-6/images/humanlines.png"

//body
let body = document.body;
body.innerText = "";
body.style.background = "rgb(123, 157, 138)";

let element = document.createElement("div");
let element1 = document.createElement("h1");
let element2 = document.createElement("h2");
let element3 = document.createElement("p");
let element4 = document.createElement("p");
let element5 = document.createElement("a");

element1.innerText = "Javascript Homework - Michael Johnson";
element2.innerText = "Astrid Sonne - Human Lines";
element3.innerText = "I've been looking for new music lately and have really enjoyed this album. She is from Copenhagen and makes experimental ambient / classical."
element4.innerText = "My favorite track off of the album is called Alto. It's shows more of her classical skill and its gorgeous."
element5.innerText = "Read & learn more about Astrid Sonne";

element.setAttribute("style", "text-align:center");
element1.setAttribute("style", "padding:0.5em; margin:0; text-align:center; color:#000000");
element2.setAttribute("style", "padding:2em; margin:0; font-style:bold; text-align:center; color:#6b5f44");
element3.setAttribute("style", "padding:.5em; margin:0; font-style:italic; text-align:center; color:#000000");
element4.setAttribute("style", "padding:.5em; margin:0; font-style:italic; text-align:center; color:#000000");
element5.setAttribute("href", "http://www.factmag.com/2018/02/28/astrid-sonne-fact-rated/");
element5.setAttribute("style", "padding:2em; margin:0; font-style:italic; text-align:right; color:#6b5f44");

myImage.setAttribute("style", "padding:0em;  margin:220px");

element.appendChild(element1);
element.appendChild(element2);
element.appendChild(element3);
element.appendChild(element4);
element.appendChild(myImage);
element.appendChild(element5);

body.appendChild(element);
