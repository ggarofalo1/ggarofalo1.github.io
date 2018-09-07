/*
window.addEventListener("load", function() {
	//trying button animation 
	var myHeading = document.querySelector('h1'),
		button = document.querySelector('h2');

	button.addEventListener("click", detectclick, false);

	function detectclick () {
		myHeading.textContent = 'Hello world!';
	}
	
	
}, false);*/
	//changes title
	//var myHeading = document.querySelector('h1'),
	//myHeading.textContent = 'Hello world!';
	
/*	
	var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/

// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it.



/* -------sends alert through button-----*/
 var paragraph = document.querySelector("p"),
    button = document.querySelector("#ice");
  // Adding click event handler to button.
  button.addEventListener("click", detectWebGLContext, false);
  function detectWebGLContext () {
    alert('Yay, I love chocolate ice cream!');   
  }

/*---------Sets alert on click---------*/
document.querySelector('#poke').onclick = function() {
    alert('Ouch! Stop poking me!');
}


/*-----Image change on click------*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/space.jpg') {
      myImage.setAttribute ('src','images/backg.png');
    } else {
      myImage.setAttribute ('src','images/space.jpg');
    }
}

/*This changes user name to the website*/
var myButton = document.querySelector('#user');
var myHeading = document.querySelector('#heading');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "User: " + storedName;
}
//saves the user name into the webpage for future login
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "User: " + storedName;
}
myButton.onclick = function() {
  setUserName();
}