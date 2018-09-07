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
window.addEventListener("load", function() {
  var paragraph = document.querySelector("p"),
    button = document.querySelector("button");
  // Adding click event handler to button.
  button.addEventListener("click", detectWebGLContext, false);
  function detectWebGLContext () {
    
    alert('Yay, I love chocolate ice cream!');   
  }
}, false);

document.querySelector('#poke').onclick = function() {
    alert('Ouch! Stop poking me!');
}

