// Image switcher code

var myImage = document.querySelector('img');
var myHeading=document.querySelector('h1');

myHeading.innerHTML = 'Hello world!';
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

document.querySelectorAll('.module').forEach(function() {
  console.log("qALL");
});



var divs = document.querySelectorAll('div');

[].forEach.call(divs, function(div) {
  // do whatever
  div.style.color = "red";
});

/*
var divs = document.querySelectorAll('div'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}
*/

/*
var divs = document.querySelectorAll('div' );

for (var div of divs) {
  div.style.color = "blue";
}
*/
