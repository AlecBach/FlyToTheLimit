//Function that detects if the menu is open or not, then opens or closes it based on that.

function showMenu() {
	if (document.getElementById("menucontainer").getAttribute("class") == "menuhidden" || document.getElementById("menucontainer").getAttribute("class") == "menuhide") {
		document.getElementById("menucontainer").className = "menubg";
		document.getElementById("menuico").classList.remove('slideleft');
		document.getElementById("menuico").classList.add('slideright');
		document.getElementById("menulist").className = "menulistshow";
		// document.getElementById("menulist").classList.remove('slideright');
		// document.getElementById("menulist").classList.add('slideleft');
	}
	else if (document.getElementById("menucontainer").getAttribute("class") == "menubg") {
		document.getElementById("menucontainer").className = "menuhide";
		document.getElementById("menuico").classList.remove('slideright');
		document.getElementById("menuico").classList.add('slideleft');
		document.getElementById("menulist").className = "menulisthide";
		// document.getElementById("menulist").classList.remove('slideleft');
		// document.getElementById("menulist").classList.add('slideright');
	}


}

//Event listener that triggers showMenu function
var menuClick = document.getElementById("menuico");
menuClick.addEventListener("click", showMenu, false);

//Get width of page, get width of element (max 1200px, min 960px, 22% of screen),
//and use that to center the container perfectly
window.onload = function start() {
	setContPos();
	setTextPos();
}

function setContPos() {
	window.setInterval(function() {
		var screenWidth = document.getElementById("page").offsetWidth;
		var container = document.getElementById("container");
		var containerWidth = container.offsetWidth;
		// console.log(screenWidth + " and " + containerWidth);
		var containerPos = (screenWidth / 2) - (containerWidth / 2) + "px";
		// console.log(containerPos);
		document.getElementById("container").style.left = containerPos;
		document.getElementById("container1").style.left = containerPos;
		document.getElementById("container2").style.left = containerPos;
		document.getElementById("container3").style.left = containerPos;
		document.getElementById("container4").style.left = containerPos;
	}, 30);
}

function setTextPos() {
	window.setInterval(function() {
		var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		console.log(screenHeight);
		if (screenHeight <= 700) {
			console.log("increase your browser size u absolute noob");
			document.getElementById("container1").style.top = "700px";
			document.getElementById("container2").style.top = "1400px";
			document.getElementById("container3").style.top = "2100px";
			console.log("height fix implemented");
		}
		else {
			document.getElementById("container1").style.top = "100%";
			document.getElementById("container2").style.top = "200%";
			document.getElementById("container3").style.top = "300%";
		}
	}, 30);
}


