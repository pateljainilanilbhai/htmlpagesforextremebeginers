function changeColor(newColor) {
//var colorName=prompt("Enter your fav color","blue");
	
  var elem = document.getElementById('para');
  elem.style.color =newColor ;
}

function getFruitName(){
	var f = ["Grapes","Apple","Orange"];
	var person = {
		firstName : "Mrugendra",
		lastName  : "Rahevar",
    };
	var fruitName = document.getElementById('favFruit');
	fruitName.innerHTML=person.firstName+'\'s favorite fruit is '+f[0];
	
	
	
	
}