//Function that detects if the menu is open or not, then opens or closes it based on that.

function showMenu() {

	if (document.getElementById("menucontainer").getAttribute("class") == "menuhidden" || document.getElementById("menuico").getAttribute("class") == "slideleft") {
		//triggers animation and opens menu, gives menu background based on page.
		document.getElementById("menucontainer").className = "menubg" + pageId;
		document.getElementById("menuico").classList.remove('slideleft');
		document.getElementById("menuico").classList.add('slideright');
		document.getElementById("menulist").className = "menulistshow";
	}
	else if (document.getElementById("menuico").getAttribute("class") == "slideright") {
		document.getElementById("menucontainer").className = "menuhide" + pageId;
		document.getElementById("menuico").classList.remove('slideright');
		document.getElementById("menuico").classList.add('slideleft');
		document.getElementById("menulist").className = "menulisthide";
	}


}

//Event listener that triggers showMenu function
var menuClick = document.getElementById("menuico");
menuClick.addEventListener("click", showMenu, false);

var pageId = document.querySelector("#pageid");
var pageId = pageId.innerHTML;
var pageId = pageId.toString();
console.log(pageId);


//Get width of page, get width of element (max 1200px, min 960px, 22% of screen),
//and use that to center the container perfectly
window.onload = function start() {
	pageRelatedStyling();
	popUpPages();
};
// window.onscroll = function (e)
// {
// 	console.log("scrolled");
//    	document.querySelector();
// }

function pageRelatedStyling(){
	if (pageId == "home") {
		console.log("We are on the Home page.")
		function setTextPos() {
			window.setInterval(function() {
				var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
				//console.log(screenHeight);
				if (screenHeight <= 700) {
					//console.log("increase your browser size u absolute noob");
					document.getElementById("container1").style.top = "700px";
					document.getElementById("container2").style.top = "1400px";
					document.getElementById("container3").style.top = "2100px";
					//console.log("height fix implemented");
				}
				else {
					document.getElementById("container1").style.top = "100%";
					document.getElementById("container2").style.top = "200%";
					document.getElementById("container3").style.top = "300%";
				}
			}, 30);
		}
		// function setContPos() {
		// 	window.setInterval(function() {
		// 		var screenWidth = document.getElementById("page").offsetWidth;
		// 		var containerWidth = document.getElementById("container").offsetWidth;
		// 		// console.log(screenWidth + " and " + containerWidth);
		// 		var containerPos = (screenWidth / 2) - (containerWidth / 2) + "px";
		// 		// console.log(containerPos);
		// 		document.getElementById("container").style.left = containerPos;
		// 		document.getElementById("container1").style.left = containerPos;
		// 		document.getElementById("container2").style.left = containerPos;
		// 		document.getElementById("container3").style.left = containerPos;
		// 		document.getElementById("container4").style.left = containerPos;
		// 	}, 30);
		// }

		setContPos()
		setTextPos()

	}
	else if (pageId == "tours") {
		// console.log("We are on the Tours page.");
		// function setContPos() {
		// 	window.setInterval(function() {
		// 		var screenWidth = document.querySelector("body").offsetWidth;
		// 		var containerWidth = document.getElementById("container1").offsetWidth;
		// 		// console.log(screenWidth + " and " + containerWidth);
		// 		var containerPos = (screenWidth / 2) - (containerWidth / 2) + "px";
		// 		// console.log(containerPos);
		// 		document.getElementById("container1").style.left = containerPos;
		// 		document.getElementById("pop-up").style.left = containerPos;
		// 	}, 30);
		// }
		setContPos();
		document.querySelector("html").style.height = "100%";
		document.querySelector("#tours").style.height = "100%";
		document.querySelector("#textwrapper").style.top = "calc(50% - 135px)";
		//document.querySelector(".menuhide").style
	}
	else if (pageId == "gallery" || pageId == "booking" || pageId == "about") {
		document.querySelector("html").style.height = "100%";
		setContPos();
		if (pageId == "booking") {
			document.querySelector("#page").style.height = "100%";
		}
		if (pageId == "about") {
			document.querySelector("#fleet").style.height = "100%";
			document.querySelector("#fleetDesc").style.top = "calc(50% - 140px)";
		}
	} 

};

function popUpPages() {
	if (pageId == "tours"){
		//ext listener and function for opening a pop up screen
		var popUpBtn = document.querySelector("#openpopup");
		var popUp = document.querySelector("#pop-up");
		var	exitBtn = document.querySelector("#exitbtn");

		popUpBtn.addEventListener("click", popUpFctn, false);
		exitBtn.addEventListener("click", popUpFctn, false);

		function popUpFctn() {
			if (popUp.getAttribute("class") == "hide") {
				popUp.classList.remove('hide');
				popUp.classList.add('show');
			}
			else if (popUp.getAttribute("class") == "show") {
				popUp.classList.remove('show');
				popUp.classList.add('hide');
			}

		}

		//Using the selector to change between content
		var selectorNodes = document.getElementsByClassName("section");
		var contentNodes = document.getElementsByClassName("content");
		 
		var selectPage = function() {
			var selection = this.getAttribute("id");
			selection = selection.replace ("btn", "");

			var	showThis = document.getElementById(selection); 

			for(var i = 0; i < contentNodes.length; i++){
				if (contentNodes[i].classList.contains("show")) {
					contentNodes[i].classList.remove('show');
					contentNodes[i].classList.add('hide');
				}
			}

			if (showThis.classList.contains("hide")) {
				showThis.classList.remove('hide');
				showThis.classList.add('show');	
			}


		};

		for (var i = 0; i < selectorNodes.length; i++) {
			selectorNodes[i].addEventListener('click', selectPage, false);
		}
	}
	if (pageId == "about") {
		//ext listener and function for opening a pop up screen
		var fleetPopUpBtn = document.querySelector("#fleetopenpopup");
		var fleetPopUp = document.querySelector("#fleetpop-up");
		var defaultCont = document.querySelector("#container1");
		var	exitBtn = document.querySelector("#exitbtn");

		fleetPopUpBtn.addEventListener("click", fleetPopUpFctn, false);
		exitBtn.addEventListener("click", fleetPopUpFctn, false);

		function fleetPopUpFctn() {
			if (fleetPopUp.getAttribute("class") == "hide") {
				fleetPopUp.classList.remove('hide');
				fleetPopUp.classList.add('show');
				defaultCont.classList.remove('showo');
				defaultCont.classList.add('hideo');
			}
			else if (fleetPopUp.getAttribute("class") == "show") {
				fleetPopUp.classList.remove('show');
				fleetPopUp.classList.add('hide');
				defaultCont.classList.remove('hideo');
				defaultCont.classList.add('showo');
			}

		}
		////////
		var staffPopUpBtn = document.querySelector("#staffopenpopup");
		var staffPopUp = document.querySelector("#staffpop-up");
		var	exitBtn2 = document.querySelector("#exitbtn2");

		staffPopUpBtn.addEventListener("click", staffPopUpFctn, false);
		exitBtn2.addEventListener("click", staffPopUpFctn, false);
		function staffPopUpFctn() {
			if (staffPopUp.getAttribute("class") == "hide") {
				staffPopUp.classList.remove('hide');
				staffPopUp.classList.add('show');
				defaultCont.classList.remove('showo');
				defaultCont.classList.add('hideo');
			}
			else if (staffPopUp.getAttribute("class") == "show") {
				staffPopUp.classList.remove('show');
				staffPopUp.classList.add('hide');
				defaultCont.classList.remove('hideo');
				defaultCont.classList.add('showo');
			}

		}

		//Using the selector to change between content
		var selectorNodes = document.getElementsByClassName("section");
		var contentNodes = document.getElementsByClassName("content");
		 
		var selectPage = function() {
			var selection = this.getAttribute("id");
			selection = selection.replace ("btn", "");

			var	showThis = document.getElementById(selection); 

			for(var i = 0; i < contentNodes.length; i++){
				if (contentNodes[i].classList.contains("show")) {
					contentNodes[i].classList.remove('show');
					contentNodes[i].classList.add('hide');
				}
			}

			if (showThis.classList.contains("hide")) {
				showThis.classList.remove('hide');
				showThis.classList.add('show');	
			}


		};

		for (var i = 0; i < selectorNodes.length; i++) {
			selectorNodes[i].addEventListener('click', selectPage, false);
		}
	}
};

function setContPos() {
	if (pageId == "home") {
		window.setInterval(function() {
			var screenWidth = document.getElementById("page").offsetWidth;
			var containerWidth = document.getElementById("container").offsetWidth;
			// console.log(screenWidth + " and " + containerWidth);
			var containerPos = (screenWidth / 2) - (containerWidth / 2);
			var containerPos = Math.floor(containerPos) + "px";
			// console.log(containerPos);
			document.getElementById("container").style.left = containerPos;
			document.getElementById("container1").style.left = containerPos;
			document.getElementById("container2").style.left = containerPos;
			document.getElementById("container3").style.left = containerPos;
			document.getElementById("container4").style.left = containerPos;
		}, 30);
	}
	else {
		window.setInterval(function() {
			var screenWidth = document.querySelector("body").offsetWidth;
			var containerWidth = document.getElementById("container1").offsetWidth;
			// console.log(screenWidth + " and " + containerWidth);
			var containerPos = (screenWidth / 2) - (containerWidth / 2);
			var containerPos = Math.floor(containerPos) + "px";
			// console.log(containerPos);
			document.getElementById("container1").style.left = containerPos;
			document.querySelector("#container1").style.top = "0";
			if (pageId == "tours") {
				document.getElementById("pop-up").style.left = containerPos;
			}
			if (pageId == "about") {
				document.getElementById("fleetpop-up").style.left = containerPos;
				document.getElementById("staffpop-up").style.left = containerPos;
				document.querySelector("#container1").style.height = "550px";
				document.querySelector("#container1").style.minHeight = "550px";
				document.querySelector("#container1").style.top = "calc(50% - 200px)";
			}
		}, 30);
	}
}

// Form submission
var errorMessage = "";
var errorText = document.querySelector("#errortext");
if (pageId == "tours"){
	// if (document.querySelector("#questions").classList.contains("show")) {
	var form = document.querySelector("#question-form");
	form.noValidate = true;
	form.addEventListener('submit', function(evt){
		var isError = false;
		var formElements = this.elements;
		for (var i = 0; i < formElements.length; i++) {
			var field = formElements[i];
			if ( ! isFieldValid(field)) {
				isError = true;
			}
		}
		if(isError){
			evt.preventDefault();
		}
	});
}
if(pageId == "booking") {
	var form = document.querySelector("#bookingForm");
	form.noValidate = true;
	form.addEventListener('submit', function(evt){
		var isError = false;
		var formElements = document.querySelectorAll("#input");
		for (var i = 0; i < formElements.length; i++) {
			var field = formElements[i];
			if ( ! isFieldValid(field)) {
				isError = true;
			}
		}
		if(isError){
			evt.preventDefault();
		}
	});
}
if(pageId == "about") {
	var form = document.querySelector("#contact-form");
	form.noValidate = true;
	form.addEventListener('submit', function(evt){
		var isError = false;
		var formElements = document.querySelectorAll(".input");
		console.log(formElements);
		for (var i = 0; i < formElements.length; i++) {
			var field = formElements[i];
			if ( ! isFieldValid(field)) {
				isError = true;
			}
		}
		if(isError){
			evt.preventDefault();
		}
	});
}
	
function isFieldValid(field){

	if(! needsToBeValidated(field)){
		return true;
	}
	console.log(field.type);
	console.log(field.value)
	field.classList.remove('invalid');
	function invalid() {
		field.classList.add('invalid');
		errorText.classList.add('show');
		errorText.classList.remove('hide');
	}

	if(field.id.length === 0 || field.name.length === 0){
		errorText.innerHTML = "error: Field should have ID and Name attributes.";
		invalid();
		return false;
	}
	if(field.required && field.value.trim() === ""){		
		errorText.innerHTML = "Please fill all fields.";
		invalid();
		return false;		
	}
	if(field.minLength > 0 && field.value.length < field.minLength){
		if (pageId == "about") {
			errorText.innerHTML = "The message must be at least " + field.minLength + " characters.";
		}
		else {
			errorText.innerHTML = "The question must be at least " + field.minLength + " characters.";
		}
		invalid();
		return false;
	}

	if(field.type === "email" && ! isEmail(field.value.toLowerCase())){			
		errorText.innerHTML = "Please provide a proper email.";
		invalid();
		return false;
	}
	
	if(field.name === "PhNumber" && ! isPhone(field.value)){
		errorText.innerHTML = "Please provide a proper Phone number.";
		invalid();
		return false;
	}
	if(field.type === "select-one" && field.value === "null") {
		errorText.innerHTML = "Please select a flight package.";
		invalid();
		return false;
	}
	if(field.type === "number" && field.value === "0") {
		errorText.innerHTML = "Please enter the number of passengers.";
		invalid();
		return false;
	}

	
	if(errorMessage !== ""){
		// generate error field
		invalid();

		// display error message in form
		errorText.innerHTML = errorMessage;
		// var errorSpan = document.querySelector("#"+ field.id +"-error");
		// errorSpan.innerHTML = errorMessage;
		// errorSpan.classList.add('warning');

		return false;
	}
return true;
}
function needsToBeValidated(field){
	if(field.id === "qstnsubmit"){
		return false;
	} else {
		return true;
		
	}
}
function isEmail(input){
	//console.log(input);
	//console.log(input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+).([a-z\.]{2,})$/));
	return input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+)\.([a-z\.]{2,})$/);
}
function isPhone(input){
	return input.match(/^[0-9.\-()]{8,15}$/);
}

function changeImage(current) {
	var imagesNumber = 27;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("n" + current).classList.add("show");
		} else {
			document.getElementById("n" + i).classList.remove("show");
			document.getElementById("n" + i).classList.add("hide");
		}
	}
}
function changeVideo(current) {
	var videosNumber = 3;

	for (i=1; i<=videosNumber; i++) {
		if (i == current) {
			document.getElementById("v" + current).classList.add("show");
		} else {
			document.getElementById("v" + i).classList.remove("show");
			document.getElementById("v" + i).classList.add("hide");
		}
	}
}
var currentThumbs = 1;
function changeThumbs(direction) {
	var thumbGroups = 3;


	if (direction == 'next') {
		if (currentThumbs == 3) {}
		else {currentThumbs++;}	;
	}
	if (direction == 'prev') {
		if (currentThumbs == 1) {}
		else {currentThumbs--;}
	}

	console.log("current group of images: " + currentThumbs);

	if (currentThumbs >= 1) {
		document.getElementById("prev").classList.add("show");
		document.getElementById("prev").classList.remove("hide");
	}
	if (currentThumbs == 1) {
		document.getElementById("prev").classList.add("hide");
		document.getElementById("prev").classList.remove("show");
	}
	if (currentThumbs <= 3) {
		document.getElementById("next").classList.add("show");
		document.getElementById("next").classList.remove("hide");
	}
	if (currentThumbs == 3) {
		document.getElementById("next").classList.add("hide");
		document.getElementById("next").classList.remove("show");
	}


	for (i=1; i<=thumbGroups; i++) {
		if (i == currentThumbs){
			document.getElementById("thumbgroup" + currentThumbs).classList.add("show");
			document.getElementById("thumbgroup" + currentThumbs).classList.remove("hide");
		} else {
			document.getElementById("thumbgroup" + i).classList.add("hide");
			document.getElementById("thumbgroup" + i).classList.remove("show");
			
		}
	}
}
//document.querySelector("#qstnsubmit").addEventListener("click", formSubmition, false);























